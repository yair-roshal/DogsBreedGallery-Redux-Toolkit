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

 
	return (
		<>
			{loadingBreeds && <div>Loading</div>}
			{!loadingBreeds && (
				<div className="App">
					<Home />
				</div>
			)}
		</>
	)
}
