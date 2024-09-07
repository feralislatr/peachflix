import getMovies from '@/utils/get-movies';

export default async function SearchPage() {
  const movies = await getMovies({ query: 'star', page: '1' });
  console.log(movies);
  return <div>Search Results</div>;
}
