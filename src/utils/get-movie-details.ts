'use server';

const baseUrl = new URL('http://www.omdbapi.com');
const apiKey = process.env.OMDB_API_KEY;

/** Get OMDb search results */
export default async function getMovieDetails(id: string) {
  const urlParams = new URLSearchParams({
    i: id,
  }).toString();
  const url = `${baseUrl}?${urlParams}&apiKey=${apiKey}`;
  return fetch(url, {
    method: 'GET',
  })
    .then(res => res.json())
    .catch(err => console.log(err));
}
