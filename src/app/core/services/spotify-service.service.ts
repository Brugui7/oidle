import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Song } from 'src/app/core/models/song.model';
import { SONG_IDS } from 'src/app/core/constants/songs.conts';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer BQDaEKacC9m419bbXHBk-ryoIHU_6NVN-lYVw6Urr0jzlMLaoKfi-XjI0yI-ZBb0zyXIIk54i1MsVBowIPknWs_OZygFac-XaddG4kdFZqkM6WFckBOafqBS30RPon_lU3f2qXx2ljIl7WhcIpwiF19PrCxLPg3az8pRoJNVo4OCKUuTfMKpe6I',
    }),
  };

  constructor(
    private http: HttpClient,
  ) {

  }

  public getSongOfTheDay(): Observable<Song> {
    const today = new Date();
    const dayNumber = Math.round(today.setHours(0, 0, 0, 0) / 864e5);
    const songID = SONG_IDS[dayNumber % SONG_IDS.length];
    console.log(today);
    console.log(dayNumber);
    console.log(dayNumber % SONG_IDS.length);

    return this.http.get<Song>(
      `https://api.spotify.com/v1/tracks/${songID}`,
      this.httpOptions,
    ).pipe(
      map(song => {
        song.name += song.artists && song.artists.length ? ` - ${ song.artists[0].name }` : '';
        return song;
      }),
    );
  }
}
