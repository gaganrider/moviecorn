import React, { useState, useEffect } from "react";
import Navbar from "../comp/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
const Watchlist = () => {
  const [movie, setMovie] = useState([]);
  const [count, setCount] = useState(0);
  const getList = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/list`);
      setMovie(data);
      console.log(movie);
    } catch (err) {
      console.log(err);
    }
  };

  const removeList = async (e) => {
    setCount(count + 1);
    console.log("list");
    e.preventDefault();
    axios.post("http://localhost:5000/removelist", {
      _id: e.target.movieid.value,
      moviename: e.target.moviename.value,
      imdb: e.target.imdb.value,
      cat1: e.target.cat1.value,
      cat2: e.target.cat2.value,
      cat3: e.target.cat3.value,
      posterh: e.target.posterh.value,
      posterv: e.target.posterv.value,
      url: e.target.url.value,
    });
  };

  useEffect(() => {
    getList();
  }, [count]);
  return (
    <div className="movies">
      {/* <Navbar/> */}
      <div className="moviesdiv">
        {movie
          ? movie.map((item) => (
              <div className="removediv">
                <form onSubmit={removeList}>
                  <input type="hidden" name="movieid" value={item._id} />
                  <input
                    type="hidden"
                    name="moviename"
                    value={item.moviename}
                  />
                  <input type="hidden" name="cat1" value={item.cat1} />
                  <input type="hidden" name="cat2" value={item.cat2} />
                  <input type="hidden" name="cat3" value={item.cat3} />
                  <input type="hidden" name="posterh" value={item.posterh} />
                  <input type="hidden" name="posterv" value={item.posterv} />
                  <input type="hidden" name="url" value={item.url} />
                  <input type="hidden" name="imdb" value={item.imdb} />
                  <button>
                    <span className="material-symbols-outlined dndbtn">
                      do_not_disturb_on
                    </span>
                  </button>
                </form>
                <Link
                  key={item._id}
                  to={`/view/${item.moviename}`}
                  className="categorycard"
                >
                  <img className="catimg" src={item.posterv} alt="" />
                </Link>
              </div>
            ))
          : "loding..."}
      </div>
    </div>
  );
};

export default Watchlist;
