import { createSlice } from "@reduxjs/toolkit";

const personCreditsSlice = createSlice({
  name: "personCredits",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPersonCreditsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPersonCreditsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchPersonCreditsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const selectPersonCreditsState = (state) => state.personCredits;
export const selectData = (state) => selectPersonCreditsState(state).data;
export const selectLoading = (state) => selectPersonCreditsState(state).loading;
export const selectError = (state) => selectPersonCreditsState(state).error;

export const {
  fetchPersonCreditsRequest,
  fetchPersonCreditsSuccess,
  fetchPersonCreditsFailure,
} = personCreditsSlice.actions;

export default personCreditsSlice.reducer;
