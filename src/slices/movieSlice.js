import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    loading: false,
    error: null,
    genres: [],
  },
  reducers: {
    fetchMovieRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMovieSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchMovieFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMovieGenre: (state, action) => {
      state.loading = false;
      state.genres = action.payload;
    },
  },
});

const selectMovieState = (state) => state.movie;
export const selectMovie = (state) => selectMovieState(state).movies;
export const selectLoading = (state) => selectMovieState(state).loading;
export const selectError = (state) => selectMovieState(state).error;
export const selectGenre = (state) => selectMovieState(state).genres;

export const {
  fetchMovieRequest,
  fetchMovieSuccess,
  fetchMovieFailure,
  fetchMovieGenre,
} = movieSlice.actions;

export default movieSlice.reducer;
