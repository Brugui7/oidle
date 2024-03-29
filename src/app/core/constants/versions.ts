import { Version } from 'src/app/core/enums/versions';
import { SONG_NAMES, STANDARD_SONGS } from 'src/app/core/constants/songs.conts';
import { DISNEY_SONG_NAMES, DISNEY_SONGS } from 'src/app/core/constants/disney-songs.conts';
import { TUNA_SONG_NAMES, TUNA_SONGS } from 'src/app/core/constants/tuna-songs.consts';

export const SONGS_BY_VERSIONS: any = {
  [Version.standard]: STANDARD_SONGS,
  [Version.disney]: DISNEY_SONGS,
  [Version.tuna]: TUNA_SONGS
}


export const NAMES_BY_VERSIONS: any = {
  [Version.standard]: SONG_NAMES,
  [Version.disney]: DISNEY_SONG_NAMES,
  [Version.tuna]: TUNA_SONG_NAMES
}