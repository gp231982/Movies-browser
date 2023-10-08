import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPeopleRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPeopleSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchPeopleFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const selectPeopleState = (state) => state.people;
export const selectData = (state) => selectPeopleState(state).data;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectError = (state) => selectPeopleState(state).error;

export const { fetchPeopleRequest, fetchPeopleSuccess, fetchPeopleFailure } =
  peopleSlice.actions;

export default peopleSlice.reducer;
