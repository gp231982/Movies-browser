export const apiKey = "4b8fe2faad502d0967a22b78268baad6";

export const popularPeopleApiUrl = `https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=${apiKey}`;

export const popularMovieApiUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;

export const genresApiUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${apiKey}`;

export const generatePeopleApiUrl = (page, apiKey) => {
  return `https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}&api_key=${apiKey}`;
};

export const creditsApiUrl = (movieId, apiKey) =>
  `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${apiKey}`;

export const movieDetailsApiUrl = (movieId, apiKey) =>
  `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}`;