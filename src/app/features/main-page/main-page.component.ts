import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SpotifyService } from 'src/app/core/services/spotify-service.service';
import { Song } from 'src/app/core/models/song.model';
import { debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';
import { SONG_NAMES } from 'src/app/core/constants/songs.conts';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @ViewChild('audioElement', { static: false }) public _audioRef?: ElementRef;
  private audio?: HTMLMediaElement;

  public MAX_PREVIEW_TIME = 16;
  public MAX_TRIES = 6;
  public daySong?: Song;
  public nextSkipSeconds: number = 1;
  public previewTimeSeconds = 1;
  public searchResults$?: Observable<string[]>;
  private searchTerms = new Subject<string>();
  public searchTerm?: string;
  public finished = false;
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
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.loadSong();
    this.searchResults$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        return of(SONG_NAMES.filter((songName: string) => {
          return term.trim() && songName.toLowerCase().includes(term.toLocaleLowerCase())
        }).slice(0, 5));
      }),
    );
  }

  public ngAfterViewInit() {
    console.log(this._audioRef);
    this.audio = this._audioRef?.nativeElement;
  }

  private loadSong() {
    this.spotifyService.getSongOfTheDay().subscribe((song: Song) => {
      this.daySong = song;
      console.log(song);
    });
  }

  public playPreview(): void {
    if (!this.audio) {
      return;
    }

    this.audio.currentTime = 0;
    const interval = setInterval(() => {
      if (!!this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
      }
      clearInterval(interval);
    }, this.previewTimeSeconds * 1000);
    this.audio.play();
  }

  public addPreviewTime(): void {
    if (this.nextSkipSeconds === 0) {
      return;
    }

    this.previewTimeSeconds += this.nextSkipSeconds++;

    this.tries[this.tryNumber++] = {
      emoji: '⏩',
      text: 'AMPLIACIÓN'
    }

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
      this.searchTerm.trim().
        toLocaleLowerCase() === this.daySong?.name.trim().toLocaleLowerCase()
    ) {
      this.tries[this.tryNumber++] = {
        emoji: '✔️',
        text: this.searchTerm
      }
      this.finished = true;
    } else {
      this.tries[this.tryNumber++] = {
        emoji: '❌',
        text: this.searchTerm
      }
    }

    this.searchTerm = '';
    if (this.tryNumber >= this.MAX_TRIES) {
      this.finished = true;
    }

    if (this.finished && this.audio) {
      this.audio.play();
    }
  }

}
