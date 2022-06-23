import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  of,
  Subject,
  switchMap,
} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  Banner,
  DataService,
  Emoji,
  Song,
  SpotifyService,
  UserTry,
} from 'src/app/core/public-api';
import { MAX_TRIES } from 'src/app/core/constants/common.consts';
import { ActivatedRoute, Router } from '@angular/router';
import { NAMES_BY_VERSIONS, SONGS_BY_VERSIONS } from 'src/app/core/constants/versions';
import { Version } from 'src/app/core/enums/versions';
import {
  VersionsSelectorComponent
} from 'src/app/features/versions-selector/versions-selector.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [
    './main-page.component.scss',
    './main-page-small.component.scss',
  ]
})
export class MainPageComponent implements OnInit {

  @ViewChild('audioElement', {static: false}) public _audioRef?: ElementRef;
  private audio?: HTMLMediaElement;
  private searchTerms = new Subject<string>();
  private namesArray = [];
  private songsArray = [];
  private version: Version = Version.standard;

  public SPOTIFY_URL = 'https://open.spotify.com/track/';
  public MAX_PREVIEW_TIME = 16;
  public daySong?: Song;
  public nextSkipSeconds: number = 1;
  public previewTimeSeconds = 1;
  public searchResults$?: Observable<string[]>;
  public searchTerm?: string;
  public finished = false;
  public playing = false;
  public banner: Banner;
  public tries: UserTry[] = [
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
  ];

  public tryNumber = 0;

  constructor(
    private spotifyService: SpotifyService,
    private _snackBar: MatSnackBar,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) {

    const version = (this.route.snapshot.params['version'] ?? '').toUpperCase();
    if (!SONGS_BY_VERSIONS[version]) {
      this.router.navigate(['']);
    }

    this.version = version as Version;

    this.namesArray = NAMES_BY_VERSIONS[this.version];
    this.songsArray = SONGS_BY_VERSIONS[this.version]

    //TODO: TO env variables
    this.banner = new Banner(
      'ca-pub-8403162055734795',
      8223140182,
      'auto',
      true,
    );
  }

  ngOnInit(): void {
    this.initialize();
    this.searchResults$ = this.searchTerms.pipe(
      debounceTime(300),
      filter(term => !term || term.length > 2),
      distinctUntilChanged(),
      switchMap((term: string) => {
        return of(this.namesArray.filter((songName: string) => {
          return term.trim() && this.normalize(songName).includes(this.normalize(term));
        }).slice(0, 3));
      }),
    );
  }

  public ngAfterViewInit() {
    this.audio = this._audioRef?.nativeElement;
  }

  private initialize() {
    const today = new Date().toLocaleDateString();
    const todayResult = this.dataService.getResultByDate(today, this.version);
    if (!!todayResult) {
      this.daySong = todayResult.song;
      this.tries = todayResult.tries;
      this.finished = true;
      this.tryNumber = this.tries.filter(userTry => !!userTry.emoji).length;
      return;
    }

    this.loadSong();
  }

  private loadSong() {
    this.spotifyService.getSongOfTheDay(this.songsArray).subscribe((song: Song) => {
      this.daySong = song;
    });
  }

  public onPlayPauseClick(): void {
    if (!this.audio) {
      return;
    }

    if (this.playing) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.playing = false;
      return;
    }

    this.audio.currentTime = 0;
    const interval = setInterval(() => {
      if (!!this.audio && !this.finished) {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.playing = false;
      }
      clearInterval(interval);
    }, this.previewTimeSeconds * 1000);
    this.audio.play();
    this.playing = true;
  }

  public addPreviewTime(): void {
    if (this.nextSkipSeconds === 0) {
      return;
    }

    this.previewTimeSeconds += this.nextSkipSeconds++;

    this.tries[this.tryNumber++] = {
      emoji: Emoji.skip,
      text: 'AMPLIACIÓN',
    };

    if (this.tryNumber >= MAX_TRIES) {
      this.finished = true;
      this.saveResult();
    }
  }

  public search(term: string): void {
    this.searchTerms.next(term);
  }

  public setValue(songName: string) {
    this.searchTerm = songName;
  }

  public submitTry(): void {
    if (!this.searchTerm) {
      return;
    }

    if (
      this.searchTerm.trim().toLocaleLowerCase() === this.daySong?.name.trim().toLocaleLowerCase()
    ) {

      this.tries[this.tryNumber++] = {
        emoji: Emoji.success,
        text: this.searchTerm,
      };
      this.finished = true;

    } else {
      this.tries[this.tryNumber++] = {
        emoji: Emoji.fail,
        text: this.searchTerm,
      };
    }

    this.searchTerm = '';
    this.searchTerms.next('');
    if (this.tryNumber >= MAX_TRIES) {
      this.finished = true;
    }

    if (this.finished && this.audio) {
      this.saveResult();
      this.audio.currentTime = 0;
      this.audio.play();
      this.playing = true;
    }
  }

  public onShareButtonClick() {
    const emojis = this.tries.map(userTry => userTry.emoji).join('');

    const text = `#Oidle #${
      new Date().toLocaleDateString()
    }\n\n🔈${ emojis }\n\nhttps://oidle.app`;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent)
    ) {
      try {
        (window.navigator as any).share({text});
      } catch (e) {
        console.error(e);
        (window as any).shareHandler.postMessage(text);
      }
      return;
    }

    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this._snackBar.open(
      'Copiado al portapapeles ✔️',
      'Cerrar',
    );
  }

  private saveResult(): void {
    if (!this.daySong) {
      return;
    }

    this.dataService.writeDayResult(this.tries, this.daySong, this.version);
  }

  public openVersionsDialog(): void {
    this.dialog.open(VersionsSelectorComponent);
  }

  private normalize(text: string): string {
    return text.trim().toLocaleLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "");
  }
}
