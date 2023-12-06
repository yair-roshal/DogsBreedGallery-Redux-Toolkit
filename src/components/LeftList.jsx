import List from "@mui/material/List"
import { useMemo } from "react"

import { LeftListItem } from "components/LeftListItem"
import { useDogs } from "redux/dogsSlice"

export const LeftList = () => {
	const { entities } = useDogs()

	const breedsList = useMemo(() => {
		const list = []

		entities.forEach((dog) => {
			const existingBreed = list.find((breed) => breed.breed === dog.breed)
			if (!existingBreed) {
				list.push({
					breed: dog.breed,
					likes: dog.likes,
					count: 1,
				})
			} else {
				existingBreed.likes += dog.likes
				existingBreed.count++
			}
		})

		return list
	}, [entities])

	return (
		<div>
			{breedsList && (
				<div>
					<List>
						{breedsList.map((dog, index) => (
							<LeftListItem key={index} dog={dog} />
						))}
					</List>
				</div>
			)}
		</div>
	)
}
