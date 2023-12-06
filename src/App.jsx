import "./App.css";
import { Home } from "./components";
import { useEffect, useState } from "react";
import { getDogs } from "./utils/api";
import { DogsContext } from "./contexts/Context";

import { ArrayToObject, randomArray } from "./utils/func";

import { Provider } from "react-redux";
import { useDogs, fetchBreeds } from "redux/dogsSlice";
import store from "redux/store";

// store.dispatch(fetchBreeds());

export function App() {
  const [dogs, setDogs] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { entities, breeds, loadingBreeds, loadingImages } = useDogs();

  console.log("entities", breeds);
  console.log("entities", entities);

  useEffect(() => {
    // getDogs()
    //   .then((res) => {
    setDogs(ArrayToObject(randomArray(Object.keys(entities))));
    // setLoading(false);
    // })
    // .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* <DogsContext.Provider value={[dogs, setDogs]}> */}

      {/* <Provider store={store}> */}
        {loadingBreeds && <div>Loading</div>}
        {!loadingBreeds && (
          <div className="App">
            <Home />
          </div>
        )}
      {/* </Provider> */}

      {/* </DogsContext.Provider> */}
    </>
  );
}
