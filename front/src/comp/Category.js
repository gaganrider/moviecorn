import React from 'react'
import {Link} from 'react-router-dom';
const Category = ({cat}) => {


  return (
    <div className='category'>
      <div className='categorydiv'>

{cat.map((item)=>(
        <Link key={item._id} to={`/view/${item.moviename}`} className='categorycard'>
      <img className='catimg' src={item.posterv} alt="" />
    </Link>
    ))}




    
{/* <div className="catwatch">
        <Link ><span className="material-symbols-outlined">play_arrow</span></Link>
  <button><span className="material-symbols-outlined">add</span></button>
        </div> */}


    






      </div>
    </div>
  )
}

export default Category
