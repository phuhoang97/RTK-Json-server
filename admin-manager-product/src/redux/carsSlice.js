import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await axios.get("http://localhost:8000/cars");
  return response.data;
});

export const updateCar = createAsyncThunk("cars/updateCar", async (car) => {
  const response = await axios.put(`http://localhost:8000/cars/${car.id}`, car);
  return response.data;
});

export const createCar = createAsyncThunk("cars/createCar", async (car) => {
  const response = await axios.post("http://localhost:8000/cars", car);
  return response.data;
});

export const deleteCar = createAsyncThunk("cars/deleteCar", async (id) => {
  await axios.delete(`http://localhost:8000/cars/${id}`);
  return id;
});

const carsSlice = createSlice({
  name: "cars",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updateCar.fulfilled, (state, action) => {
      const updatedCar = action.payload;
      const index = state.findIndex((car) => car.id === updatedCar.id);
      if (index !== -1) {
        state[index] = updatedCar;
      }
    });
    builder.addCase(createCar.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteCar.fulfilled, (state, action) => {
      return state.filter((car) => car.id !== action.payload);
    });
  },
});

export default carsSlice.reducer;
