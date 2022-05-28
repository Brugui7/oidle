import { UserTry } from 'src/app/core/models/user-try.model';
import { Song } from 'src/app/core/models/song.model';

export interface DayResult {
  date: string;
  song: Song,
  tries: UserTry[]
}