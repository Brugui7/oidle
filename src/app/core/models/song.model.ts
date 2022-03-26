export interface Song {
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number,
  type: string,
  uri: string;
  artists: Artist[];
  album: Album;
  external_urls: {
    spotify: string;
  }
}

export interface Artist {
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Album {
  images: Image[];
}

export interface Image {
  height: number;
  url: string;
  width: number;
}