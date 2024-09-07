'use server';

const baseUrl = new URL('http://www.omdbapi.com');
const apiKey = process.env.OMDB_API_KEY;

/** Get OMDb search results */
export default async function getMovies(params: { query: string; page?: string }) {
  const urlParams = new URLSearchParams({
    s: encodeURIComponent(params.query),
    type: 'movie',
    ...(params.page && { page: params.page }),
  }).toString();
  const url = `${baseUrl}?${urlParams}&apiKey=${apiKey}`;

  return fetch(url, {
    method: 'GET',
  })
    .then(res => res.json())
    .catch(err => console.log(err));
}
