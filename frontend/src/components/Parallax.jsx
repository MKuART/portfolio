import React from 'react'
import './parallax.css'
import SectionTwo from './sectionTwo'
import Arrows from './Arrows'


const Parallax = () => {
  return (
    <div className='body'>
        <div className='section1'>
            <div  className='text'>welcome to my experience...!
            <p className='text-p'>Parallax Lorem ipsum dolor sit,<br /> amet consectetur adipisicing elit.</p></div> 
        </div>
        <div className='section3'>
            <div className='eyes01'>
              <div className='eyeL01'></div><div className='eyeR01'></div>
            </div>
        </div>
        <div className='see-more-container' ><p>see more...!</p></div>
{/*         <div className='arrow-container'>
            <div className="arrow">
              <div className="shape1"></div>
              <div className="shape2"></div>
            </div>
            <div className="arrow">
              <div className="shape1"></div>
              <div className="shape2"></div>
            </div>
        </div> */}
        <Arrows/>
        <SectionTwo/>
    </div>
  )
}

export default Parallax

// https://ui.aceternity.com/components/3d-card-effect