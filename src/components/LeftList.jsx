import List from "@mui/material/List"

import { LeftListItem } from "./LeftListItem"
import { useDogs } from "redux/dogsSlice"

export const LeftList = () => {
	const { entities, breeds, loadingBreeds, loadingImages } = useDogs()

	const likesByBreed = {}
	const breedCount = {}

	entities.forEach((dog) => {
		if (!likesByBreed[dog.breed]) {
			likesByBreed[dog.breed] = 0
			breedCount[dog.breed] = 0
		}
		likesByBreed[dog.breed] += dog.likes
		breedCount[dog.breed]++
	})

	const result = Object.entries(likesByBreed).map(([breed, likes]) => ({
		breed,
		likes,
		count: breedCount[breed], 
	}))

	return (
		<div>
			{result && console.log("newLeftList :>> ", result)}
			{result && (
				<div>
					<List>
						{result.map((dog, index) => (
							<LeftListItem key={index} dog={dog} />
						))}
					</List>
				</div>
			)}
		</div>
	)
}
