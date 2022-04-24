import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Song } from 'src/app/core/models/song.model';
import { SONG_IDS, STANDARD_SONGS } from 'src/app/core/constants/songs.conts';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  private accessToken?: string;

  constructor(
    private http: HttpClient,
  ) { }

  public login(): Observable<boolean> {
    const now = new Date();
    const token = localStorage.getItem('accessToken');
    const expireTime = localStorage.getItem('expireTime');
    if (!token || !expireTime || new Date(expireTime) <= now) {
      return this.getAccessToken().pipe(tap((tokenData: any) => {
        this.accessToken = tokenData.access_token;
        localStorage.setItem('accessToken', this.accessToken + "");
        const newExpireTime = new Date();
        newExpireTime.setSeconds(newExpireTime.getSeconds() + tokenData.expires_in);
        localStorage.setItem('expireTime', newExpireTime + "");
      }));
    } else {
      this.accessToken = token;
      return of(true);
    }
  }

  // TODO: change any and error handling
  private getAccessToken(): Observable<any> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    };

    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', '');
    body.set('client_secret', '');

    return this.http.post(
      'https://accounts.spotify.com/api/token',
      body.toString(),
      options
    )
  }

  public getSongOfTheDay(): Observable<Song> {
    const today = new Date();
    const dayNumber = Math.round(today.setHours(0, 0, 0, 0) / 864e5);
    return of(STANDARD_SONGS[dayNumber % SONG_IDS.length]);
    /*const songID = SONG_IDS[dayNumber % SONG_IDS.length];
    return this.http.get<Song>(
      `https://api.spotify.com/v1/tracks/${ songID }`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.accessToken}`,
        }),
      },
    ).pipe(
      map(song => {
        song.name += song.artists && song.artists.length ? ` - ${ song.artists[0].name }` : '';
        return song;
      }),
    );*/
  }
}
