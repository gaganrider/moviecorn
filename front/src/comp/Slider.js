import React from 'react'
import {Show} from './Array'
import {Link} from 'react-router-dom'
const Slider = ({show}) => {

  
  return (
    <div className='slider'>
      <div className="sliderdiv">




      {Show.map((item)=>(
        <div key={item.moviename} className="slide">
        <div className="slidetxt">
          <div className="sildetxtdiv">
<h2>{item.moviename}</h2>
<div className="rating">
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<p>Imdb {item.imdb}</p>
<div className="cat">
<h4>{item.cat1}</h4><h4>|</h4><h4>{item.cat2}</h4><h4>|</h4><h4>{item.cat3}</h4>
</div>
</div>

<div className="watchbtn">
<Link to={`/watch/${item.moviename}`}><span className="material-symbols-outlined">play_arrow</span> Watch Now</Link>
<button><span className="material-symbols-outlined">add</span> Add to Watchlist</button>
</div>

<p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi expedita velit nobis, molestiae tempore cum nisi illum exercitationem tempora eaque pariatur suscipit quibusdam cumque iure minus non nulla earum vero sunt corporis consequuntur, explicabo a quam blanditiis. Ipsam, incidunt ipsum.</p>


</div>
        </div>
{/* <img src="https://images.hdqwalls.com/wallpapers/the-witcher-poster-2019-cu.jpg" alt="pata nai" /> */}
<img src={item.posterh} alt="" />
    </div>
    
    ))}











       




      </div>
    </div>
  )
}

export default Slider
