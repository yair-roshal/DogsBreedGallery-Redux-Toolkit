import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const fetchBreeds = createAsyncThunk("dogs/fetchBreeds", async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const breedsData = await response.json();
  const breeds = Object.keys(breedsData.message);
  return breeds;
});

const fetchDogImage = createAsyncThunk("dogs/fetchDogImage", async (breed) => {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
  const dogImage = await response.json();
  return dogImage;
});

const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    entities: [],
    breeds: [],
    loadingBreeds: false,
    loadingImages: false,
  },
  reducers: {
    addLike(state, action) {
      const { breed, id } = action.payload;
      const dog = state.entities.find((dog) => dog.breed === breed && dog.id === id);
      if (dog) {
        dog.likes += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.loadingBreeds = true;
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.loadingBreeds = false;
        state.breeds = action.payload;
      })
      .addCase(fetchBreeds.rejected, (state) => {
        state.loadingBreeds = false;
      })
      .addCase(fetchDogImage.pending, (state) => {
        state.loadingImages = true;
      })
      .addCase(fetchDogImage.fulfilled, (state, action) => {
        state.loadingImages = false;
        const { breed, image } = action.payload;
        state.entities.push({ breed, image, likes: 0, id: state.entities.length });
      })
      .addCase(fetchDogImage.rejected, (state) => {
        state.loadingImages = false;
      });
  },
});

export const { addLike } = dogsSlice.actions;

export const useDogs = () => {
  const dispatch = useDispatch();
  const { entities, breeds, loadingBreeds, loadingImages } = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);

  const getDogImage = (breed) => {
    dispatch(fetchDogImage(breed));
  };

  return {
    entities,
    breeds,
    loadingBreeds,
    loadingImages,
    getDogImage,
  };
};

export default dogsSlice.reducer;
