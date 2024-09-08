import getMovies from '@/utils/get-movies';

type Props = {
  searchParams: {
    s: string;
    page?: string;
  };
};

export default async function SearchPage({ searchParams }: Props) {
  const movies = await getMovies(searchParams);
  console.log(movies);
  return <div>Search Results</div>;
}
