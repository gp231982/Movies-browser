export const apiKey = "4b8fe2faad502d0967a22b78268baad6";

export const popularPeopleApiUrl = `https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=${apiKey}`;

export const popularMovieApiUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;

export const genresApiUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${apiKey}`;

export const creditsApiUrl = `https://api.themoviedb.org/3/movie/926393/credits?language=en-US&api_key=${apiKey}`;

// export const creditsApiUrl = (selectedId) => {
//     return `https://api.themoviedb.org/3/movie/${selectedId}/credits?language=en-US&api_key=${apiKey}`;
//   };