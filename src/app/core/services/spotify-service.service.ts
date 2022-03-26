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
      Authorization: 'Bearer BQB5meJ7JTNTi_4LUw6qHJBmfopSRCJLkqYlWM1BmvEh-a1h3TI3znPTikjI0bjYuXCxKZzhAzraiNilvPueiziEqzmcDhphLzIE7C9oIEF0upJcqCLtPIRr6jSOMYKwNdmDh2Pbd32R2Dg7yHNP7mQCxHD-t3M_N5YvFtJD40L54cA0-gTMaIQ',
    }),
  };

  constructor(
    private http: HttpClient,
  ) {

  }

  public getSongOfTheDay(): Observable<Song> {
    const today = new Date();
    const dayNumber = today.setHours(0, 0, 0, 0);
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
