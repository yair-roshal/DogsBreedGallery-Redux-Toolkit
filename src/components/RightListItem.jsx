import { useState, useContext, useEffect } from "react"
import { FetchImg } from "../hooks"

import { Card, Grid, CardHeader, CardActions, IconButton } from "@mui/material"
import { styled, Box } from "@mui/system"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { DogsContext } from "../contexts/Context"
import { addLike, useDogs } from "redux/dogsSlice"
import { useDispatch } from "react-redux"

const MyBox = styled("Box")({
	padding: 8,
	borderRadius: 4,
})

export const RightListItem = ({ dog }) => {
	const { id, breed, likes, image } = dog
 	const dispatch = useDispatch()
	// const [count, setCount] = useState(likes);
	// const [dogs, setDogs] = useContext(DogsContext);
	const { entities, breeds, getDogImage, loadingImages } = useDogs()

	// const handleIncrement = () => {
	// 	dispatch(addLike({ id, breed })) // Dispatch addLike action with necessary payload
	// }
	// useEffect(() => {
	// 	getDogImage(breed)
	// }, [getDogImage, breed])

	return (
		<Grid item xs={3}>
			<Box>
				<Card sx={{ maxWidth: 345 }}>
					<CardHeader subheader={breed} />
					<CardActions disableSpacing>
						<IconButton
							// onClick={() => handleIncrement()}
							aria-label="add to favorites"
							sx={{ color: likes > 0 ? "red" : "" }}
						>
							<FavoriteIcon /> <span>{likes} </span>
						</IconButton>
					</CardActions>
					{/* <FetchImg dog={breed} /> */}
					{loadingImages && <img src={image} alt={breed} />}{" "}
					{/* Render image based on loadingImages */}
				</Card>
			</Box>
		</Grid>
	)
}
