import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"

export const fetchBreeds = createAsyncThunk("dogs/fetchBreeds", async () => {
	const response = await fetch("https://dog.ceo/api/breeds/list/all")
	const breedsData = await response.json()

	console.log("breedsData.message", breedsData.message)

	const breedsByCount = []

	for (const breed in breedsData.message) {
		if (breedsData.message[breed].length > 0) {
			for (const subbreed of breedsData.message[breed]) {
				breedsByCount.push(breed)
			}
		} else {
			breedsByCount.push(breed)
		}
	}

	const breeds = Object.keys(breedsData.message)
	// return breeds

	return breedsByCount
})

export const fetchDogImage = createAsyncThunk(
	"dogs/fetchDogImage",
	async (breed) => {
		try {
			const response = await fetch(
				`https://dog.ceo/api/breed/${breed}/images/random`
			)
			const dogImageData = await response.json()
			const dogImage = dogImageData.message
			return dogImage
		} catch (error) {
			throw new Error(`Failed to fetch image for breed ${breed}: ${error}`)
		}
	}
)

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
			const { breed, id } = action.payload
			const dog = state.entities.find(
				(dog) => dog.breed === breed && dog.id === id
			)
			if (dog) {
				dog.likes += 1
			}
		},
		addEntities(state, action) {
			state.entities = [...state.entities, ...action.payload]
			// state.entities.push(...action.payload)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBreeds.pending, (state) => {
				state.loadingBreeds = true
			})
			.addCase(fetchBreeds.fulfilled, (state, action) => {
				const rows = 20
				console.log(" action.payload", action.payload)
				const randomBreeds = action.payload
					.sort(() => Math.random() - 0.5)
					.slice(0, rows * 4)

				state.loadingBreeds = false
				state.breeds = randomBreeds

				state.entities = randomBreeds.map((breed, index) => ({
					breed,
					image: "",
					likes: 0,
					id: index,
				}))
			})
			.addCase(fetchBreeds.rejected, (state) => {
				state.loadingBreeds = false
			})
			.addCase(fetchDogImage.pending, (state) => {
				state.loadingImages = true
			})
			.addCase(fetchDogImage.fulfilled, (state, action) => {
				state.loadingImages = false

				const breed = action.meta.arg
				const dogIndex = state.entities.findIndex((dog) => dog.breed === breed)

				if (dogIndex !== -1) {
					state.entities[dogIndex] = {
						...state.entities[dogIndex],
						image: action.payload,
					}
				}
			})

			.addCase(fetchDogImage.rejected, (state) => {
				state.loadingImages = false
			})
	},
})

export const { addLike, addEntities } = dogsSlice.actions

//=============================
// Hook

export const useDogs = () => {
	const { entities, breeds, loadingBreeds, loadingImages } = useSelector(
		(state) => state.dogs
	)

	return {
		breeds,
		entities,
		loadingBreeds,
		loadingImages,
	}
}

export default dogsSlice.reducer
