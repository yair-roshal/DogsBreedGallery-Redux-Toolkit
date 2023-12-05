import ReactDOM from "react-dom/client";

import { App } from "App";
import "styles/App.scss";
import { Provider } from "react-redux";
import { fetchDogs } from "redux/dogsSlice";
import store from "redux/store";

// store.dispatch(fetchDogs());
 

const root = ReactDOM.createRoot(document.getElementById("root"));

 

root.render(
  // <Provider store={store}>
  // <DogsContext.Provider value={(dogs, setDogs)}>
    <App />
  // </DogsContext.Provider>
  // </Provider>
);
