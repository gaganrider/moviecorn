import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from "./pages/View";
import axios from "axios";
import Path2 from "./pages/Path2";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import Watchlist from "./pages/Watchlist";
import Search from "./pages/Search";
import Navbar from "./comp/Navbar";

function App() {
  const [movie, setMovie] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState()
  const getData=(data)=>{
setData(data)
  }

  const Auth=async()=>{
    axios.get('http://localhost:5000/checkAuthentication')
  .then(res => {
    setLoggedIn(res.data.authenticated);
    console.log(loggedIn)
  })
  .catch((error) => {
    setLoggedIn(false)
})};





  const getAll = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000`);
      setMovie(data);
      console.log(movie);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className="App">
      
      <Router>
      <Navbar getData={getData}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />

          {movie
            ? movie.map((item) => (
                <Route
                  key={item.moviename}
                  path={`/view/${item.moviename}`}
                  element={
                    <View
                      moviename={item.moviename}
                      imdb={item.imdb}
                      cat1={item.cat1}
                      cat2={item.cat2}
                      cat3={item.cat3}
                      id={item._id}
                      path2={`/watch/${item.moviename}`}
                      posterh={item.posterh}
                      posterv={item.posterv}
                      url={item.url}
                    />
                  }
                />
              ))
            : "loding"}

          {movie
            ? movie.map((item) => (
                <Route
                  key={item.moviename}
                  path={`/watch/${item.moviename}`}
                  element={<Path2 moviename={item.moviename} url={item.url} />}
                />
              ))
            : "loding"}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/search" element={<Search name={data} />} />
          
          {/* {Movie.map((item) => (
            <Route path={item.path} element={<View src={item.src} name={item.name} />} />
          ))} */}
        </Routes>
      </Router>
      {/* <View/> */}
    </div>
  );
}

export default App;
