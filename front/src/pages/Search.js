import React,{useState,useEffect} from 'react'
import Navbar from '../comp/Navbar'
import {Link} from 'react-router-dom'
import axios from "axios";
const Search = ({name}) => {
    const [search, setSearch] = useState([]);
    
    const getSearch = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/search/${name}`);
        setSearch(data);
        console.log("movies", search);
        
      } catch (err) {
        console.log(err);
      }
    };

    

    useEffect(() => {
      getSearch();
    }, [name]);
  return (
    <div className='movies'>
      {/* <Navbar getData={getData} /> */}
      <div className="moviesdiv">
      
      {search.length!==0?search.map((item)=>(
        <Link key={item._id} to={`/view/${item.moviename}`} className='categorycard'>
      <img className='catimg' src={item.posterv} alt="" />
    </Link>
    )): <span> <h1>Not Found</h1> <br /> <h5>You searched for '{name}'</h5></span>}
    
      </div>
    </div>
  )
}

export default Search
