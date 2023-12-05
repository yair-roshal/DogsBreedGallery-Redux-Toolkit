import { useState, useContext } from "react";
import { FetchImg } from "../hooks";

import { Card, Grid, CardHeader, CardActions, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { DogsContext } from "../contexts/Context";

console.log("RightListItem :>> ");

const MyBox = styled("Box")({
  padding: 8,
  borderRadius: 4,
});

export const RightListItem = ({ dog }) => {
  const { id, breed, likes } = dog;
  const [count, setCount] = useState(likes);
  const [dogs, setDogs] = useContext(DogsContext);

  function addLikes(object, searchID) {
    const replacedObject = object.slice(0);
    for (let i = 0; i < replacedObject.length; i++) {
      if (replacedObject[i].id === searchID) {
        replacedObject[i].likes++;
        return replacedObject;
      }
    }
    return replacedObject;
  }

  const handleIncrement = () => {
    setCount((count) => count + 1);
    setDogs(addLikes(dogs, id));
  };

  return (
    <Grid item xs={3}>
      <MyBox>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader subheader={breed} />
          <CardActions disableSpacing>
            <IconButton
              onClick={handleIncrement}
              aria-label="add to favorites"
              sx={{ color: count > 0 ? "red" : "" }}
            >
              <FavoriteIcon /> <span>{count} </span>
            </IconButton>
          </CardActions>

          <FetchImg dog={breed} />
        </Card>
      </MyBox>
    </Grid>
  );
};
