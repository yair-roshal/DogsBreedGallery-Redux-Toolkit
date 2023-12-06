import { useState, useEffect } from "react"

import {
	Card,
	Grid,
	CardHeader,
	CardActions,
	IconButton,
	Box,
} from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { addLike, useDogs, fetchDogImage } from "redux/dogsSlice"
import { useDispatch } from "react-redux"

export const RightListItem = ({ dog }) => {
	const { id, breed, likes, image } = dog
	const dispatch = useDispatch()
	const { entities, loadingImages } = useDogs()
	const [dogImage, setDogImage] = useState(null)

	useEffect(() => {
		dispatch(fetchDogImage(breed))
	}, [breed])

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
			<Box
				sx={{
					padding: 1,
					borderRadius: 1,
				}}
			>
				<Card sx={{ maxWidth: 345 }}>
					<CardHeader subheader={breed} />
					<CardActions disableSpacing>
						<IconButton
							onClick={() => dispatch(addLike({ id, breed }))}
							aria-label="add to favorites"
							sx={{ color: likes > 0 ? "red" : "" }}
						>
							<FavoriteIcon /> <span>{likes} </span>
						</IconButton>
					</CardActions>
					<>
						{loadingImages && <div>Loading</div>}
						{!loadingImages && (
							<Box className="imgDog">
								<Box className="wrap">
									<img src={dogImage} alt="dog"></img>
								</Box>
							</Box>
						)}
					</>
				</Card>
			</Box>
		</Grid>
	)
}
