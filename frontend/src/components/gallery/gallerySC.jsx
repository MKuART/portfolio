import { useEffect, useState } from 'react'
import './gallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedCardIndex(index);
  };
  

/**
 * example data:
 * [
  {
    "_id": "660c6284d948b5abea9fbf83",
    "name": "MK-Ultra",
    "imageUrls": [
      "./assets/mku/itteration.png",
      "./assets/mku/itteration018.png"
    ],
    "__v": 0
  }
]
 */
  const projects = [
    { title: 'Title 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 6', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 7', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 8', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 9', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 10', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 11', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 12', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 13', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },
    { title: 'Title 14', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut accusantium unde facilis?' },

  ];
  const displayProjects = projects.slice(startIndex, startIndex + 6);

  const handleClickPrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleClickNext = () => {
    if (startIndex + 6 < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className='gallery-bg'>
      <div className='gallery-container' >
        <div className='carussel-container'>
          <div className='left-arrow' onClick={handleClickPrev}>
            <FontAwesomeIcon className='arrows-icon' icon={faAngleLeft}/>
          </div>
          <div className='pics-container'>
            {displayProjects.map((project, index) => (
              <div className={`pic-card ${selectedCardIndex === index ? 'expanded' : ''}`} 
                key={index}
                onClick={() => setSelectedCardIndex(index)}
                >
                <div className='pic-container'></div>
                <h3>{project.title}</h3>
                <p className='pic-description'>{project.description}</p>
                <div className='pic-description'></div>
              </div>
            ))}
          </div>
          

          <div className='right-arrow' onClick={handleClickNext}>
          <FontAwesomeIcon className='arrows-icon' icon={faAngleRight}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery

[
  {
    "name": "MK-Ultra",
    "description": "blender Animation",
    "imageUrls": [
      "src/assets/mku/itteration.png",
      "src/assets/mku/itteration018.png"
    ]
  },
  {
    "name": "Retro Street Loop",
    "description": "blender Animation for Music",
    "imageUrls": [
      "src/assets/mku/itteration.png",
      "src/assets/mku/itteration018.png"
    ]
  },
  {
    "name": "Physiotherapie",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "src/assets/schachKugelBackground01.png",
      "src/assets/schachKugelBackground01.png"
    ]
  },
  {
    "name": "Physiotherapie02",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "src/assets/schachKugelBackground01.png",
      "src/assets/schachKugelBackground01.png"
    ]
  },
  {
    "name": "Physiotherapie03",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "src/assets/schachKugelBackground01.png",
      "src/assets/schachKugelBackground01.png"
    ]
  },
  {
    "name": "Physiotherapie04",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "src/assets/schachKugelBackground01.png",
      "src/assets/schachKugelBackground01.png"
    ]
  },
  {
    "name": "Physiotherapie05",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "src/assets/schachKugelBackground01.png",
      "src/assets/schachKugelBackground01.png"
    ]
  }
]