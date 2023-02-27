
import {Link} from 'react-router-dom';
import Category from '../comp/Category';
import Navbar from '../comp/Navbar';
import React, { useEffect, useState } from "react";
import axios from 'axios';


const View = (props) => {
  const [more, setMore] = useState([]);
const [btn,setBtn]=useState('')
const [tick,setTick]=useState('')
const [movie, setMovie] = useState([]);


  const getList=async ()=>{
    try{
      const {data}=await axios.get(`http://localhost:5000/list`)
      setMovie(data)
      console.log(movie)
    }catch(err){
      console.log(err)
    }
  }

  const sorted=movie.map((item)=>{
    return(item._id)
  })
  const filter=()=>{
    if(sorted.includes(props.id)== true){
   setBtn('Added To Watchlist')
   setTick('check')
   console.log('found')
 }else{
   setBtn('Add To Watchlist')
   setTick('add')
   console.log('notfound')
 }}

  const handleList=async(e)=>{
    e.preventDefault()
    if(tick==='add'){
      setTick('check')
    setBtn('Added To Watchlist')
    axios.post('http://localhost:5000/list', {
      _id:e.target.movieid.value,
      moviename:e.target.moviename.value,
      imdb:e.target.imdb.value,
      cat1:e.target.cat1.value,
      cat2:e.target.cat2.value,
      cat3:e.target.cat3.value,
      posterh:e.target.posterh.value,
      posterv:e.target.posterv.value,
      url:e.target.url.value
    })
    console.log('added')
    }else{
      setTick('add')
    setBtn('Add To Watchlist')
    axios.post('http://localhost:5000/removelist', {
      _id:e.target.movieid.value,
      moviename:e.target.moviename.value,
      imdb:e.target.imdb.value,
      cat1:e.target.cat1.value,
      cat2:e.target.cat2.value,
      cat3:e.target.cat3.value,
      posterh:e.target.posterh.value,
      posterv:e.target.posterv.value,
      url:e.target.url.value
    })
    console.log('removed')
    }
  }

  const getAll=async ()=>{
    axios.post('http://localhost:5000/suggestion', {
      cat1: props.cat1,
      cat2: props.cat2,
      cat3: props.cat3
      
    })
    .then(function (res) {

      console.log(res.data);
      setMore(res.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    getAll();
  },[] )

  useEffect(() => {
    filter();
  },[movie,props.id] )

  useEffect(() => {
    getList();
  }, [btn])
  
  return (
    <div>
        {/* <Navbar/> */}
      <div className="slide">
            <div className="slidetxt">
              <div className="sildetxtdiv">
<h2>{props.moviename}</h2>

<div className="rating">
  <span className="material-symbols-outlined">star</span>
  <span className="material-symbols-outlined">star</span>
  <span className="material-symbols-outlined">star</span>
  <span className="material-symbols-outlined">star</span>
  <span className="material-symbols-outlined">star</span>
  <p>Imdb {props.imdb}</p>
  <div className="cat">
  <h4>{props.cat1}</h4><h4>|</h4><h4>{props.cat2}</h4><h4>|</h4><h4>{props.cat3}</h4>
</div>
</div>

<div className="watchbtn">
  <Link to={props.path2}><span className="material-symbols-outlined">play_arrow</span> Watch Now</Link>
  <form onSubmit={handleList} >
  <input type="hidden" name='movieid' value={props.id} />
<input type="hidden" name='moviename' value={props.moviename}/>
<input type="hidden" name='cat1' value={props.cat1} />
<input type="hidden" name='cat2' value={props.cat2} />
<input type="hidden" name='cat3' value={props.cat3} />
<input type="hidden" name='posterh' value={props.posterh} />
<input type="hidden" name='posterv' value={props.posterv} />
<input type="hidden" name='url' value={props.url} />
<input type="hidden" name='imdb' value={props.imdb} />
  <button ><span className="material-symbols-outlined">{tick}</span>{btn}</button>
  </form>
</div>

<p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi expedita velit nobis, molestiae tempore cum nisi illum exercitationem tempora eaque pariatur suscipit quibusdam cumque iure minus non nulla earum vero sunt corporis consequuntur, explicabo a quam blanditiis. Ipsam, incidunt ipsum.</p>


</div>
            </div>
{/* <img src="https://images.hdqwalls.com/wallpapers/the-witcher-poster-2019-cu.jpg" alt="pata nai" /> */}
<img src={props.posterh} alt="" />
        </div>
        <div className="viewbottom">
        <h3 className='cathead'>More Like This</h3>
        {more?<Category cat={more}/>:"lode"}
        
      </div>
    </div>
  )
}

export default View
