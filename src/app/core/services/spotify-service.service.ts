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
      Authorization: 'Bearer BQD2unq_R-RwChHAeMwtL2JUXgdF6CmlGoUm1jLwE1T3ZklCSNg9UU5VsFjZH-RfogYGR-HveY9UST8AOUC9quaPByA9IjeoAkH1dGkm3P5cgSIq3mEvlvxP0uwoTsIUJpibVNCGWJSoNS1yz_8FvPGxAxGm3ytuVCC4Xi_11hCunTNW3vFDbZc',
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
