import "./App.css";
import { Home } from "./components";
import { useEffect, useState } from "react";
import { getDogs } from "./utils/api";
import { DogsContext } from "./contexts/Context";

import { ArrayToObject, randomArray } from "./utils/func";

export function App() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDogs()
      .then((res) => {
        setDogs(ArrayToObject(randomArray(Object.keys(res))));
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <DogsContext.Provider value={[dogs, setDogs]}>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="App">
          <Home />
        </div>
      )}
    </DogsContext.Provider>
  );
}
