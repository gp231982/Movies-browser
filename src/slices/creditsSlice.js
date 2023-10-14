import { createSlice } from "@reduxjs/toolkit";

const creditsSlice = createSlice({
  name: "credits",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchCreditsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCreditsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchCreditsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const selectCreditsState = (state) => state.credits;
export const selectData = (state) => selectCreditsState(state).data;
export const selectLoading = (state) => selectCreditsState(state).loading;
export const selectError = (state) => selectCreditsState(state).error;

export const { fetchCreditsRequest, fetchCreditsSuccess, fetchCreditsFailure } =
  creditsSlice.actions;

export default creditsSlice.reducer;
