import { createSlice } from "@reduxjs/toolkit";

const personDetailsSlice = createSlice({
  name: "person",
  initialState: {
    personDetails: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPersonDetailsRequest: (state) => {
      state.loading = true;
      state.personDetails = null;
    },
    fetchPersonDetailsSuccess: (state, action) => {
      state.loading = false;
      state.personDetails = action.payload;
    },
    fetchPersonDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const selectPerson = (state) => state.person;
export const selectPersonDetails = (state) => selectPerson(state).personDetails;
export const selectPersonLoading = (state) => selectPerson(state).loading;
export const selectPersonError = (state) => selectPerson(state).error;

export const {
  fetchPersonDetailsRequest,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsFailure,
} = personDetailsSlice.actions;

export default personDetailsSlice.reducer;
