import { useEffect, useState, useContext, useMemo } from "react";
import List from "@mui/material/List";

import { LeftListItem } from "./LeftListItem";
// import { DogsContext } from "../contexts/Context";
import { toObject, searchLikes } from "../utils/func";
import { useDogs } from "redux/dogsSlice";
export const LeftList = () => {
  // const [entities, setDogs] = useContext(DogsContext);
  const { entities, breeds, loadingBreeds, loadingImages } = useDogs();

  const newArr = [];
  for (let i = 0; i < entities.length; ++i) {
    const values = Object.values(entities[i]);
    newArr.push(values[1]);
  }

  const countOfBreed = newArr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  const allBreeds = Object.keys(countOfBreed);
  const ArrayCountOfBreed = Object.entries(countOfBreed);
  const ObjectCountOfBreed = toObject(ArrayCountOfBreed);

  const [newLeftList, setNewLeftList] = useState(
    searchLikes(entities, ObjectCountOfBreed, allBreeds)
  );

  useEffect(() => {
    setNewLeftList(searchLikes(entities, ObjectCountOfBreed, allBreeds));
  }, [entities]);

  return (
    <div>
      {newLeftList && (
        <div>
          <List>
            {console.log("LeftList :>> ")}
            {newLeftList.map((dog, index) => (
              <LeftListItem key={index} dog={dog} />
            ))}
          </List>
        </div>
      )}
    </div>
  );
};
