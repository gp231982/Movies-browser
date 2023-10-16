import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "details",
    initialState: {
        detail: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchMovieDetailsRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchMovieDetailsSuccess: (state, action) => {
            state.loading = false;
            state.detail = action.payload;
        },
        fetchMovieDetailsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

const selectMovieDetailsState = (state) => state.details;
export const selectDetailsData = (state) =>
    selectMovieDetailsState(state).detail;
export const selectDetailsLoading = (state) =>
    selectMovieDetailsState(state).loading;
export const selectDetailsError = (state) =>
    selectMovieDetailsState(state).error;

export const {
    fetchMovieDetailsRequest,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsFailure,
} = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;