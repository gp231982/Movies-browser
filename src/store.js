import { configureStore } from "@reduxjs/toolkit";
import saga from "./core/App/saga";
import createSagaMiddleware from "redux-saga";
import peopleReducer from "./slices/peopleSlice";
import movieReducer from "./slices/movieSlice";
import creditsReducer from "./slices/creditsSlice";
import detailsReducer from "./slices/movieDetailSlice";
import personReducer from "./slices/personDetailSlice";
import personCreditsReducer from "./slices/personCreditsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    people: peopleReducer,
    movie: movieReducer,
    credits: creditsReducer,
    details: detailsReducer,
    person: personReducer,
    personCredits: personCreditsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
