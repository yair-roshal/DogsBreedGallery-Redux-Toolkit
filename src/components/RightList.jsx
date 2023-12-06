import { RightListItem } from "./RightListItem";
import Grid from "@mui/material/Grid";
// import { useContext } from "react";
// import { DogsContext } from "../contexts/Context";
import { useDogs } from "redux/dogsSlice";
export const RightList = () => {
  // const [entities, setDogs] = useContext(DogsContext);
  const { entities, breeds, loadingBreeds, loadingImages } = useDogs();

  return (
    <div>
      {entities && (
        <div>
          <Grid container spacing={2}>
            {entities.map((dog, index) => (
              <RightListItem key={index} dog={dog} />
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};
