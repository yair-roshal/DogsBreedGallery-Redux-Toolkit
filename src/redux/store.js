import { configureStore } from "@reduxjs/toolkit";
import dogsReducer from "redux/dogsSlice";

export default configureStore({
  reducer: {
    dogs: dogsReducer,
  },
});
