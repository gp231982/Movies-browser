import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import peopleReducer from "./slices/peopleSlice";
import movieReducer from "./slices/movieSlice";
import creditsReducer from "./slices/creditsSlice";
import saga from "./core/App/saga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    people: peopleReducer,
    movie: movieReducer,
    credits: creditsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
