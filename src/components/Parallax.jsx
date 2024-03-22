import React from 'react'
import './parallax.css'


const Parallax = () => {
  return (
    <div className='body'>
        <div className='section1'>
            <div className='glass'>glass-container</div>
            <div  className='text'>welcome to my experience...!
            <p className='text-p'>Parallax Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></div> 
        </div>
        <div className='section2'>
          <div className='eyes'>
          <div className='eyeL'></div><div className='eyeR '></div>
          <div className='see-more'>see more!</div>
          </div>
        </div>
    </div>
  )
}

export default Parallax