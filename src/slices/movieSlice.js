import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchMovieRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPeopleSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchPeopleFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const selectMovieState = (state) => state.movie;
export const selectMovie = (state) => selectMovieState(state).movies;
export const selectLoading = (state) => selectMovieState(state).loading;
export const selectError = (state) => selectMovieState(state).error;

export const { fetchMovieRequest, fetchPeopleSuccess, fetchPeopleFailure } =
  movieSlice.actions;

export default movieSlice.reducer;
