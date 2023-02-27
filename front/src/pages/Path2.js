import React from 'react'
// import {useCallback} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Path2 = (props) => {
    const handle = useFullScreenHandle();
  return (
    <div className='player'>


<button onClick={handle.enter}>
<span id='fullscreen' className="material-symbols-outlined">
fullscreen
</span>
      </button>

      <FullScreen handle={handle}>
      <iframe width="640" height="360" frameborder="0" title={props.moviename}  src={props.url} ></iframe>


      </FullScreen>
      {/* <iframe width="640" height="360" frameborder="0" src="https://mega.nz/embed/pAkkiSDb#XmEUW1ALWq67Rfrp7Jg-UfkbVuh9_G0bCS-75vlvH4M" allowfullscreen ></iframe> */}

     </div>
  )
}

export default Path2
