import {
	ListItem,
	Box,
	Divider,
	Card,
	CardHeader,
	CardContent,
	Typography,
	CardActions,
	IconButton,
} from "@mui/material"

import FavoriteIcon from "@mui/icons-material/Favorite"

export const LeftListItem = ({ dog }) => {
	const { breed, count, likes } = dog

	return (
		<Box
			sx={{
				width: "100%",
				bgcolor: "background.paper",
				margin: "5px 0px",
			}}
		>
			<ListItem disablePadding>
				<Card
					sx={{
						width: "200%",
						display: "flex",
						flexDirection: "row",
					}}
				>
					<CardHeader
						title={breed}
						sx={{
							width: "70%",
							display: "flex",
							flexDirection: "row",
						}}
					/>

					<CardContent>
						<Typography variant="body1" color="text.secondary">
							count={count}
						</Typography>

						<CardActions disableSpacing>
							<IconButton
								aria-label="add to favorites"
								sx={{ color: likes > 0 ? "red" : "" }}
							>
								<FavoriteIcon /> <span>{likes} </span>
							</IconButton>
						</CardActions>
					</CardContent>
				</Card>
			</ListItem>

			<Divider />
		</Box>
	)
}
