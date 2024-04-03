import { useEffect, useState } from 'react';
import './gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const URI = "http://localhost:2222";
const projectEndpoint = "/project";
const relativePath = "../assets/mku/itteration.png";
const absolutePath = "C:/Users/Michél/Desktop/portfolio/portfolio/frontend/src/" + relativePath.substring(2);

// Jetzt können Sie den absoluten Pfad verwenden
console.log(absolutePath);

function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(URI + projectEndpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (!response.ok) {
        console.error("Error fetching project data:");
      } else {
        const data = await response.json();
        setProjects(data);  
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

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

  const displayProjects = projects.slice(startIndex, startIndex + 6);

  const handleClick = (index) => {
    setSelectedCardIndex(index);
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
                <div className='pic-container'>
                  {project.imageUrls[0] && (
                    <img src={`file://${"C:/Users/Michél/Desktop/portfolio/portfolio/frontend/src/" + project.imageUrls[0].substring(2)}`} alt={`First Image`} />
                  )}
                </div>
                <h3>{project.name}</h3>
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
  );
}

export default Gallery;

/**
 * <div className='pics-container'>
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
 */