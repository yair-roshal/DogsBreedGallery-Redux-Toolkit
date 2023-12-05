import { useEffect, useState } from "react";
import { getImage } from "../utils/api";

export const FetchImg = ({ dog }) => {
  const [loading, setLoading] = useState(true);
  const [dataImg, setDataImg] = useState([]);

  useEffect(() => {
    getImage(dog)
      .then((res) => {
        setDataImg(res);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="imgDog">
          <div className="wrap">
            <img src={dataImg} alt="dog"></img>
          </div>
        </div>
      )}
    </>
  );
};
