import axios from "axios";

const URL = "https://dog.ceo/api/breeds/list/all";

export function getDogs() {
  return axios.get(URL).then((Response) => {
    const res = Response.data.message;
    return res;
  });
}

export function getImage(dog) {
  return axios
    .get(`https://dog.ceo/api/breed/${dog}/images/random`)
    .then((Response) => {
      const res = Response.data.message;
      return res;
    });
}
