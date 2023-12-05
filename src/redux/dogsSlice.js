import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "constants/constants";

export const fetchDogs = createAsyncThunk("dogs/fetchDogs", async () => {
  const response = await fetch(URL);
  const dogs = await response.json();
  return dogs;
});

const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    addLike(state, action) {
      const { id, breed, likes } = action.payload;
      const existingDog = state.entities.find((dog) => dog.id === id);
      if (existingDog) {
        existingDog.like = likes + 1;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchDogs.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchDogs.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    });
    builder.addCase(fetchDogs.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { addLike } = dogsSlice.actions;
export default dogsSlice.reducer;
