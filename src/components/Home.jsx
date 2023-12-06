import { RightList } from "components/RightList"
import { LeftList } from "components/LeftList"
import { styled, Grid, Paper, Box } from "@mui/material"

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}))

export function Home() {
	return (
		<>
			<Box sx={{ width: "100%" }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={4}>
						<Item>
							<LeftList />
						</Item>
					</Grid>

					<Grid item xs={8}>
						<Item>
							<RightList />
						</Item>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}
