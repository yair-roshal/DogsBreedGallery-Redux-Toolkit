import "./App.css"
import { Home } from "./components"
import { useEffect, useState } from "react"
import { getDogs } from "./utils/api"
import { DogsContext } from "./contexts/Context"

import { ArrayToObject, randomArray } from "./utils/func"

import { useDogs, fetchBreeds, addEntities } from "redux/dogsSlice"
import store from "redux/store"
import { useDispatch, useSelector, Provider } from "react-redux"
import { random } from "lodash"

// store.dispatch(fetchBreeds());

export function App() {
	const dispatch = useDispatch()

	const [newBreeds, setNewBreeds] = useState([])
	// const [loading, setLoading] = useState(true);
	const { entities, breeds, loadingBreeds, loadingImages } = useDogs()

	useEffect(() => {
		dispatch(fetchBreeds())
	}, [])

	useEffect(() => {
		console.log("breeds", breeds)
		console.log("entities", entities)

		// console.log(
		//   "ArrayToObject(randomArray(Object.keys(breeds))) ",
		//   ArrayToObject(randomArray(Object.keys(breeds)))
		// );

		// const newEntities = ArrayToObject(randomArray(Object.keys(breeds)));
		console.log("breeds", breeds)

		const newBreeds = []

		if (breeds.length > 0) {
			const rowsAmount = 20
			for (let i = 0; i < rowsAmount * 4; i++) {
				newBreeds.push({
					id: i,
					breed: breeds[random(0, breeds.length - 1)],
					image: null,
				})
			}
			setNewBreeds(newBreeds)

			console.log("newBreeds :>> ", newBreeds)
		}
	}, [breeds])

	// useEffect(() => {
	// 	dispatch(addEntities(newBreeds))
	// }, [newBreeds])

	return (
		<>
			{/* <DogsContext.Provider value={[dogs, setDogs]}> */}

			{/* <Provider store={store}> */}
			{loadingBreeds && <div>Loading</div>}
			{!loadingBreeds && (
				<div className="App">
					<Home />
				</div>
			)}
			{/* </Provider> */}

			{/* </DogsContext.Provider> */}
		</>
	)
}
