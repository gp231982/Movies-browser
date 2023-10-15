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
      state.data.push(...action.payload);
    },
    fetchPeopleFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchAllPeopleSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

const selectPeopleState = (state) => state.people;
export const selectData = (state) => selectPeopleState(state).data;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectError = (state) => selectPeopleState(state).error;

export const selectPeopleByQuery = (state, query) => {
  const people = selectData(state);
  if (!query || query.trim() === "") {
    return people;
  }
  return selectData(state).filter((person) =>
    person.name.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export const {
  fetchPeopleRequest,
  fetchPeopleSuccess,
  fetchPeopleFailure,
  fetchAllPeopleSuccess,
} = peopleSlice.actions;

export default peopleSlice.reducer;
