import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ getData }) => {
  const [css, setCss] = useState("none");
  const [data, setData] = useState("childdata");
  const [value, setvalue] = useState("");

  const navigate = useNavigate();
  const myStyle = {
    display: css,
  };

  const change = (e) => {
    e.preventDefault();
    setvalue(e.target.value);
    console.log(value);
    const searchtxt = e.target.value;
    const arr = searchtxt.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    setData(str2);
    getData(str2);
    navigate("/search");
    console.log("searched");
    console.log(data);
  };

  // const onSearch = () => {
  //   getData(data);
  //   navigate("/search");
  //   console.log("searched");
  // };

  return (
    <div>
      <nav>
        <div className="navl">
          <h1>
            Movie<span>corn</span>
          </h1>
        </div>
        <div className="navm">
          <Link to="/">
            Home <div className="line"></div>
          </Link>
          <Link to="/movies">
            Movies <div className="line"></div>
          </Link>
          <Link to="/movies">
            Tv Shows <div className="line"></div>
          </Link>
          <Link to="/watchlist">
            Watchlist <div className="line"></div>
          </Link>
        </div>
        <div className="navr">
          <form  className="search">
            <input type="text" name="search" value={value} onChange={change} />
            {/* <Link to="/search" onClick={onSearch}>
              <span className="material-symbols-outlined">search</span>
            </Link> */}
          </form>
          <span
            onClick={() => setCss("flex")}
            className="material-symbols-outlined"
          >
            menu
          </span>
        </div>
      </nav>
      <div className="overlay" style={myStyle}>
        <div className="user">
          <span
            onClick={() => setCss("none")}
            className="material-symbols-outlined"
          >
            close
          </span>
          <img
            src="https://images.pexels.com/photos/7505197/pexels-photo-7505197.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <h3>Gaganrider</h3>
          <Link to="/watchlist">Watchlist</Link>
          <button>Signout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
