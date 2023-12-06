import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const fetchBreeds = createAsyncThunk("dogs/fetchBreeds", async () => {
	const response = await fetch("https://dog.ceo/api/breeds/list/all")
	const breedsData = await response.json()
	const breeds = Object.keys(breedsData.message)
	return breeds
})

export const fetchDogImage = createAsyncThunk(
	"dogs/fetchDogImage",
	async (breed) => {
		try {
			const response = await fetch(
				`https://dog.ceo/api/breed/${breed}/images/random`
			)
			const dogImageData = await response.json()
			const dogImage = dogImageData.message // Обновленный объект изображения собаки
			return dogImage
		} catch (error) {
			// Обработка ошибки при загрузке изображения
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
				state.loadingBreeds = false
				state.breeds = action.payload

				state.entities = action.payload.map((breed, index) => ({
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
					console.log('dogIndex :>> ', dogIndex);
					// Обновляем фото собаки по индексу в массиве entities
					state.entities[dogIndex] = {
						...state.entities[dogIndex],
						image: action.payload, // Предполагая, что свойство для фото называется 'image'
					}
					console.log('state.entities[dogIndex] :>> ', state.entities[dogIndex]);
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
	const dispatch = useDispatch()
	const { entities, breeds, loadingBreeds, loadingImages } = useSelector(
		(state) => state.dogs
	)

	// const getDogImage = ({ id, breed }) => {
	// 	dispatch(fetchDogImage({ id, breed }))
	// }

	return {
		breeds,

		entities,
		loadingBreeds,
		loadingImages,
		// getDogImage,
	}
}

export default dogsSlice.reducer
