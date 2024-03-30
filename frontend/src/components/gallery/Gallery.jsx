import React from 'react'
import './gallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Gallery() {
  return (
    <div className='gallery-bg'>
      <div className='gallery-container' >
        <div className='carussel-container'>
          <div className='left-arrow'>
            <FontAwesomeIcon className='arrows-icon' icon={faAngleLeft}/>
          </div>

          <div className='pics-container'>
            <div className='pic-card project-one'>
              <div className='pic-container'></div>
              <h3>title</h3>
              <p className='pic-disciption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?</p>
              <div className='pic-discription'></div>
            </div>
            <div className='pic-card'>
              <div className='pic-container'></div>
              <h3>title</h3>
              <p className='pic-disciption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?</p>
              <div className='pic-discription'></div>
            </div>
            <div className='pic-card'>
              <div className='pic-container'></div>
              <h3>title</h3>
              <p className='pic-disciption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?</p>
              <div className='pic-discription'></div>
            </div>
            <div className='pic-card'>
              <div className='pic-container'></div>
              <h3>title</h3>
              <p className='pic-disciption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?</p>
              <div className='pic-discription'></div>
            </div>
            <div className='pic-card'>
              <div className='pic-container'></div>
              <h3>title</h3>
              <p className='pic-disciption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?</p>
              <div className='pic-discription'></div>
            </div>
            <div className='pic-card'>
              <div className='pic-container'></div>
              <h3>title</h3>
              <p className='pic-disciption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?</p>
              <div className='pic-discription'></div>
            </div>
          </div>

          <div className='right-arrow'>
          <FontAwesomeIcon className='arrows-icon' icon={faAngleRight}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery