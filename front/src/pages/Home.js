import React, { useEffect, useState } from "react";
import Category from '../comp/Category'
import Navbar from '../comp/Navbar'
import Slider from '../comp/Slider'
import axios from 'axios';


const Home = () => {

  const [movie, setMovie] = useState([]);
  const [action, setAction] = useState([]);
  const [thriller, setThriller] = useState([]);
  const [crime, setCrime] = useState([]);
  const [drama, setDrama] = useState([]);
  const [user,setUser]=useState("")

  const getUser=async ()=>{
    try{
      const {data}=await axios.get(`http://localhost:5000/checkAuthentication`)
      setUser(data)
      console.log(user)
    }catch(err){
      console.log(err)
    }
  }




  const getAll=async ()=>{
    try{
      const {data}=await axios.get(`http://localhost:5000`)
      setMovie(data)
      console.log(movie)
    }catch(err){
      console.log(err)
    }
  }
  const getAction=async ()=>{
    try{
      const {data}=await axios.get(`http://localhost:5000/cat/Action`)
      setAction(data)
      console.log(action)
    }catch(err){
      console.log(err)
    }
  }
  const getThrill=async ()=>{
    try{
      const {data}=await axios.get(`http://localhost:5000/cat/Thriller`)
      setThriller(data)
      console.log(action)
    }catch(err){
      console.log(err)
    }
  }
  const getCrime=async ()=>{
    try{
      const {data}=await axios.get(`http://localhost:5000/cat/Crime`)
      setCrime(data)
      console.log(crime)
    }catch(err){
      console.log(err)
    }
  }
  const getDrama=async ()=>{
    try{
      const {data}=await axios.get(`http://localhost:5000/cat/Drama`)
      setDrama(data)
      console.log(drama)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getAll();
    getAction()
    getThrill()
    getDrama()
    getCrime()
  },[] )
  useEffect(() => {
    getUser()
  },[user] )
  shuffle(movie)
  const random=movie.concat()
shuffle(random)
  function shuffle(array) {
    
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <div className='homediv'>
        {/* <Navbar/> */}
        {/* <Over/> */}
        {movie?<Slider show={random}/>:"loding..."}
      {/* <Slider/> */}
      <div className="homecat">
      <h3 className='cathead'>Top Pics</h3>
      {movie?<Category cat={movie}/>:"loding..."}
      <h3 className='cathead'>Best in Action</h3>
      {action?<Category cat={action}/>:"loding..."}
      {/* <Category cat={Action} /> */}
      <h3 className='cathead'>Best in Thriller</h3>
      {thriller?<Category cat={thriller}/>:"loding..."}
      {/* <Category cat={Thriller}/> */}
      <h3 className='cathead'>Best in Crime</h3>
      {crime?<Category cat={crime}/>:"loding..."}
      {/* <Category cat={Crime}/> */}
      <h3 className='cathead'>Best in Drama</h3>
      {drama?<Category cat={drama}/>:"loding..."}
      {/* <Category cat={Movie}/> */}
      </div>
      

    </div>
  )
}

export default Home
