import "./App.css"
import { Home } from "components/Home"
import { useEffect } from "react"
import { useDogs, fetchBreeds } from "redux/dogsSlice"
import { useDispatch } from "react-redux"

export function App() {
	const dispatch = useDispatch()
	const { loadingBreeds } = useDogs()

	useEffect(() => {
		dispatch(fetchBreeds())
	}, [])

	return (
		<>
			{loadingBreeds && <div>Loading</div>}
			{!loadingBreeds && <Home />}
		</>
	)
}
