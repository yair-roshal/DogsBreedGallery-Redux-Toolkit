import { useState, useContext, useEffect } from "react"
import { FetchImg } from "../hooks"

import { Card, Grid, CardHeader, CardActions, IconButton } from "@mui/material"
import { styled, Box } from "@mui/system"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { DogsContext } from "../contexts/Context"
import { addLike, useDogs, fetchDogImage } from "redux/dogsSlice"
import { useDispatch } from "react-redux"

const MyBox = styled("Box")({
	padding: 8,
	borderRadius: 4,
})

export const RightListItem = ({ dog }) => {
	const { id, breed, likes, image } = dog
	const dispatch = useDispatch()
	const { entities, breeds, getDogImage, loadingImages, addDogImage } =
		useDogs()
	const [dogImage, setDogImage] = useState(null)

	useEffect(() => {
		dispatch(fetchDogImage(breed))
	}, [breed]) // Выполнять запрос только при изменении породы

	useEffect(() => {
		if (!loadingImages && entities.length > 0) {
			const updatedDog = entities.find((d) => d.breed === breed)
			if (updatedDog) {
				setDogImage(updatedDog.image)
			}
		}
	}, [loadingImages, entities, breed])

	return (
		<Grid item xs={3}>
			<Box>
				<Card sx={{ maxWidth: 345 }}>
					<CardHeader subheader={breed} />
					<CardActions disableSpacing>
						<IconButton
							// onClick={handleIncrement}
							onClick={() => dispatch(addLike({ id, breed }))}
							aria-label="add to favorites"
							sx={{ color: likes > 0 ? "red" : "" }}
						>
							<FavoriteIcon /> <span>{likes} </span>
						</IconButton>
					</CardActions>
					{/* <FetchImg dog={breed} /> */}
 					<>
						{loadingImages && <div>Loading</div>}
						{!loadingImages && (
							<div className="imgDog">
								<div className="wrap">
									<img src={dogImage} alt="dog"></img>
								</div>
							</div>
						)}
					</>
				</Card>
			</Box>
		</Grid>
	)
}
