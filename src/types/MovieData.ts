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
