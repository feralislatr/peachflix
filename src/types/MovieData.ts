export type MovieData = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type MovieDataSearchResult = {
  Search: MovieData[];
  totalResults: string;
  Response: string;
  Error?: string;
};

export type MovieDetail = {
  Title: string;
  Rated: string;
  Poster: string;
  Metascore: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Actors: string;
  Plot: string;
  Response: string;
  Error?: string;
};
