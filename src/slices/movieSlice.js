import { createSlice } from "@reduxjs/toolkit";

const storedGenreIds = localStorage.getItem("genre_ids");
const initialGenreIds = storedGenreIds ? JSON.parse(storedGenreIds) : [];

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    loading: false,
    error: null,
    genres: initialGenreIds,
    movieId: null,
  },
  reducers: {
    fetchMovieRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMovieSuccess: (state, action) => {
      state.loading = false;
      state.movies.push(...action.payload);
    },
    fetchMovieFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMovieGenre: (state, action) => {
      state.loading = false;
      state.genres = action.payload;
    },
    handleMovieClick: (state, action) => {
      state.movieId = action.payload;
    },
    fetchAllMoviesSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
  },
});

export const selectMoviesByQuery = (state, query) => {
  const movies = selectMovie(state);
  const seen = {};
  if (!query || query.trim() === "") {
    return movies;
  }
  return movies
    .filter((movie) => {
      if (!seen[movie.title]) {
        seen[movie.title] = true;
        return true;
      }
      return false;
    })
    .filter((movie) => {
      return movie.title.toUpperCase().includes(query.trim().toUpperCase());
    });
};

const selectMovieState = (state) => state.movie;
export const selectMovie = (state) => selectMovieState(state).movies;
export const selectLoading = (state) => selectMovieState(state).loading;
export const selectError = (state) => selectMovieState(state).error;
export const selectGenre = (state) => selectMovieState(state).genres;
export const selectMovieId = (state) => selectMovieState(state).movieId;

export const {
  fetchMovieRequest,
  fetchMovieSuccess,
  fetchMovieFailure,
  fetchMovieGenre,
  handleMovieClick,
  fetchAllMoviesSuccess,
} = movieSlice.actions;

export default movieSlice.reducer;
