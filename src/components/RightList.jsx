import { RightListItem } from "components/RightListItem"
import { Grid } from "@mui/material"
import { useDogs } from "redux/dogsSlice"

export const RightList = () => {
	const { entities } = useDogs()

	return (
		<div>
			{entities && entities.length > 0 && (
				<div>
					<Grid container spacing={2}>
						{entities.map((dog, index) => (
							<RightListItem key={index} dog={dog} />
						))}
					</Grid>
				</div>
			)}
		</div>
	)
}
