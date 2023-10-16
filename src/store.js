import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import peopleReducer from "./slices/peopleSlice";
import movieReducer from "./slices/movieSlice";
import creditsReducer from "./slices/creditsSlice";
import detailsReducer from "./slices/movieDetailSlice";
import saga from "./core/App/saga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    people: peopleReducer,
    movie: movieReducer,
    credits: creditsReducer,
    details: detailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
