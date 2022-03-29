import { Injectable } from '@angular/core';
import { Song } from 'src/app/core/models/song.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public isFirstTime(): boolean {
    return !localStorage.getItem('firstTime');
  }

  public setFirstTime(firstTime: boolean): void {
    localStorage.setItem('firstTime', `${firstTime}`);
  }

  public writeDayResult(tries: any, song: Song): void {
    const userHistoryLocal = localStorage.getItem('userHistory');
    let userHistory = [];
    if (!!userHistoryLocal) {
      userHistory = JSON.parse(userHistoryLocal);
    }

    userHistory.push({
      date: new Date().toLocaleDateString(),
      tries,
      song
    });

    localStorage.setItem('userHistory', JSON.stringify(userHistory));
  }

  public getResultByDate(dateString: string): any {
    const userHistoryLocal = localStorage.getItem('userHistory');
    if (!userHistoryLocal) {
      return null;
    }
    const userHistory = JSON.parse(userHistoryLocal);
    return userHistory.find((history: any) => history.date === dateString);
  }
}
