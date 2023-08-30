import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./carsSlice";

const store = configureStore({
  reducer: {
    cars: carsSlice,
  },
});

export default store;
