import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SpotifyService } from 'src/app/core/services/spotify-service.service';
import { Song } from 'src/app/core/models/song.model';
import { debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';
import { SONG_NAMES } from 'src/app/core/constants/songs.conts';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/core/services/data.service';
import { Banner } from 'src/app/core/models/banner.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [ './main-page.component.scss' ],
})
export class MainPageComponent implements OnInit {

  @ViewChild('audioElement', {static: false}) public _audioRef?: ElementRef;
  private audio?: HTMLMediaElement;
  private searchTerms = new Subject<string>();

  public MAX_PREVIEW_TIME = 16;
  public MAX_TRIES = 6;
  public daySong?: Song;
  public nextSkipSeconds: number = 1;
  public previewTimeSeconds = 1;
  public searchResults$?: Observable<string[]>;
  public searchTerm?: string;
  public finished = false;
  public playing = false;
  public banner: Banner;
  public tries = [
    {
      emoji: '',
      text: '',
    },
    {
      emoji: '',
      text: '',
    },
    {
      emoji: '',
      text: '',
    },
    {
      emoji: '',
      text: '',
    },
    {
      emoji: '',
      text: '',
    },
    {
      emoji: '',
      text: '',
    },
  ];
  public tryNumber = 0;

  constructor(
    private spotifyService: SpotifyService,
    private _snackBar: MatSnackBar,
    public dataService: DataService,
  ) {
    this.banner = new Banner(
      'ca-pub-8403162055734795',
      8223140182,
      'auto',
      true
    )
  }

  ngOnInit(): void {
    this.initialize();
    this.searchResults$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        return of(SONG_NAMES.filter((songName: string) => {
          return term.trim() && songName.toLowerCase().includes(term.toLocaleLowerCase());
        }).slice(0, 5));
      }),
    );
  }

  public ngAfterViewInit() {
    this.audio = this._audioRef?.nativeElement;
  }

  private initialize() {
    const today = new Date().toLocaleDateString();
    const todayResult = this.dataService.getResultByDate(today);
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
    this.spotifyService.login().subscribe(_ => {
      this.spotifyService.getSongOfTheDay().subscribe((song: Song) => {
        this.daySong = song;
      });
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
      emoji: '⏩',
      text: 'AMPLIACIÓN',
    };

    if (this.tryNumber >= this.MAX_TRIES) {
      this.finished = true;
    }
  }

  public search(term: string): void {
    this.searchTerms.next(term);
  }

  public setValue(songName: string) {
    this.searchTerm = songName;
    this.searchTerms.next('');
  }

  public submitTry(): void {
    if (!this.searchTerm) {
      return;
    }

    if (
      this.searchTerm.trim().toLocaleLowerCase() === this.daySong?.name.trim().toLocaleLowerCase()
    ) {
      this.tries[this.tryNumber++] = {
        emoji: '✔️',
        text: this.searchTerm,
      };
      this.finished = true;
      this.saveWin();
    } else {
      this.tries[this.tryNumber++] = {
        emoji: '❌',
        text: this.searchTerm,
      };
    }

    this.searchTerm = '';
    if (this.tryNumber >= this.MAX_TRIES) {
      this.finished = true;
    }

    if (this.finished && this.audio) {
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

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      (window.navigator as any).share({text});
      return
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
      'Cerrar'
    );
  }

  private saveWin(): void {
    if (!this.daySong) {
      return;
    }

    this.dataService.writeDayResult(this.tries, this.daySong);
  }

}
