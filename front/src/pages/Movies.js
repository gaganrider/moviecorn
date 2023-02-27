import React, { useState, useEffect } from "react";
import Navbar from "../comp/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
const Movies = () => {
  const [movie, setMovie] = useState([]);

  const getAll = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000`);
      setMovie(data);
      console.log("movies", movie);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className="movies">
      {/* <Navbar /> */}
      <div className="moviesdiv">
        {movie
          ? movie.map((item) => (
              <Link
                key={item._id}
                to={`/view/${item.moviename}`}
                className="categorycard"
              >
                <img className="catimg" src={item.posterv} alt="" />
              </Link>
            ))
          : "loding..."}
      </div>
    </div>
  );
};

export default Movies;
