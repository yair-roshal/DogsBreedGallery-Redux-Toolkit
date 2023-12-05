import { RightListItem } from "./RightListItem";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { DogsContext } from "../contexts/Context";

export const RightList = () => {
  const [dogs, setDogs] = useContext(DogsContext);

  return (
    <div>
      {dogs && (
        <div>
          <Grid container spacing={2}>
            {dogs.map((dog, index) => (
              <RightListItem key={index} dog={dog} />
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};
