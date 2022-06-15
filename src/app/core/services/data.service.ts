import { Injectable } from '@angular/core';
import { Song } from 'src/app/core/models/song.model';
import { UserTry } from 'src/app/core/models/user-try.model';
import { DayResult, Emoji } from '../public-api';
import { Stats } from 'src/app/core/models/stats.model';
import { Version } from 'src/app/core/enums/versions';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  public isFirstTime(): boolean {
    return !localStorage.getItem('firstTime');
  }

  public setFirstTime(firstTime: boolean): void {
    localStorage.setItem('firstTime', `${ firstTime }`);
  }

  public writeDayResult(tries: UserTry[], song: Song, version: Version): void {
    const historyKey = version === Version.standard ? 'userHistory' : version;
    const userHistoryLocal = localStorage.getItem(historyKey);
    let userHistory = [];
    if (!!userHistoryLocal) {
      userHistory = JSON.parse(userHistoryLocal);
    }

    userHistory.push({
      date: new Date().toLocaleDateString(),
      tries,
      song,
    });

    localStorage.setItem(historyKey, JSON.stringify(userHistory));
  }

  public getResultByDate(dateString: string, version: Version): DayResult | null {
    const historyKey = version === Version.standard ? 'userHistory' : version;

    const userHistoryLocal = localStorage.getItem(historyKey);
    if (!userHistoryLocal) {
      return null;
    }

    return JSON.parse(userHistoryLocal).find((history: any) => history.date === dateString);
  }

  public getStats(): Stats | null {
    const userHistoryLocal = localStorage.getItem('userHistory');
    if (!userHistoryLocal) {
      return null;
    }

    const userHistory = JSON.parse(userHistoryLocal) as DayResult[];
    const stats: Stats = {
      totalPlayed: 0,
      totalWon: 0,
      triesByGames: new Map<number, number>(),
    };

    userHistory.forEach((dayResult, idx) => {
      const winTryIndex = dayResult.tries.findIndex(userTry => userTry.emoji === Emoji.success);
      if (winTryIndex !== -1) {
        stats.totalWon++;
      }
      stats.totalPlayed++;

      const userTriesNumber = winTryIndex === -1 ? 7 : winTryIndex + 1;
      if (!stats.triesByGames.has(userTriesNumber)) {
        stats.triesByGames.set(userTriesNumber, 0);
      }

      stats.triesByGames.set(userTriesNumber, stats.triesByGames.get(userTriesNumber)! + 1);
    });
    return stats;

  }
}
