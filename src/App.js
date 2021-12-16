import "./App.css";
import { useState, useEffect } from "react";
import Data from "./data";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function App() {
  let [data, setData] = useState([]);
  let [isLoading, setLoading] = useState(true);
  // data = data.reverse();
  const getData = async () => {
    const response = await axios.get(
      "https://tiktok-backend-estudyspot.herokuapp.com/"
    );
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => getData(), []);

  const decreaseLikes = async (_id) => {
    const response = await axios.post(
      `https://tiktok-backend-estudyspot.herokuapp.com/${_id}`,
      {
        likeValue: -1,
      }
    );
    setData(response.data);
  };

  const addComment = async (_id, msg) => {
    const response = await axios.put(
      `https://tiktok-backend-estudyspot.herokuapp.com/addcomment/${_id}`,
      {
        msg: msg,
      }
    );
    setData(response.data);
  };

  const increaseLike = async (_id) => {
    const response = await axios.post(
      `https://tiktok-backend-estudyspot.herokuapp.com/${_id}`,
      {
        likeValue: 1,
      }
    );
    setData(response.data);
  };

  return (
    <>
      {!isLoading ? (
        <div className="bg example">
          {data.map((data) => (
            <Data
              data={data}
              key={data._id}
              increaseLike={increaseLike}
              decreaseLikes={decreaseLikes}
              addComment={addComment}
            />
          ))}
        </div>
      ) : (
        <div className="loader">
          <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        </div>
      )}
    </>
  );
}

export default App;
