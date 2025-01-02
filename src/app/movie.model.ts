export interface Movie {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly genre: string;
  readonly desc: string;
  readonly releaseDate: string;
  readonly cast: string;
  rating: Rating;
  isFav: boolean;
  isWatched: boolean;
}

export interface Rating {
  rate: number;
  votes: number;
}
