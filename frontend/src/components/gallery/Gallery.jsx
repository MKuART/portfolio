import { useEffect, useState } from 'react';
import './gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

const URI = "http://localhost:2222";
const projectEndpoint = "/project";

function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [projects, setProjects] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'didppzjta'
    }
  });

  const book01 = cld.image('portfolio/qwjtzhtxdosu7or9xalr');
  book01.resize(fill().width(500).height(300));


  useEffect(() => {
    fetchProjects();
  }, [shouldUpdate]);

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
      setStartIndex(startIndex - 2);
    }
  };

  const handleClickNext = () => {
    if (startIndex + 6 < projects.length) {
      setStartIndex(startIndex + 2);
    }
  };

  const displayProjects = projects.slice(startIndex, startIndex + 6);

  const handleClick = (index) => {
    setSelectedCardIndex(index);
  };

  const handleClose = () => {
    selectedCardIndex(null);
    setIsOpen(false);
  };

  return (
    <div className='gallery-bg'>
      <div className='gallery-container' >
        <div className='carussel-container'>
          <div className='left-arrow' onClick={handleClickPrev}>
            <FontAwesomeIcon className='arrows-icon' icon={faAngleLeft}/>
          </div>
          {isOpen === true && selectedCardIndex !== null ? ( 
            <div className={`single-pics-container`}>
              <div className={`single-pic-card`} onClick={() => handleClick(selectedCardIndex)}>
                <div className='single-pic-container'>
                  <h3>{displayProjects[selectedCardIndex].name}</h3>
                  {displayProjects[selectedCardIndex].imageUrls[0] && (
                    <AdvancedImage className='single-pic-only' cldImg={cld.image(`${displayProjects[selectedCardIndex].imageUrls[0]}`).resize(fill().width(540).height(280))} alt={`First Image`} />
                    )}
                </div>
                <p className='single-pic-description'>{displayProjects[selectedCardIndex].description}</p>
                <button onClick={handleClose}>Close</button>
              </div>

              <div className='gab'></div>

              <div className='history'>

                <section>
                  <div className='content-container'>

                  <h4>first section</h4>
                  <p className='.history-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid maiores nostrum repudiandae corporis excepturi quaerat minima reiciendis sapiente at optio, quas itaque, vitae quam odio maxime tenetur exercitationem? Fugiat, earum?</p>
                  {displayProjects[selectedCardIndex].imageUrls[1] && (
                    <img className='single-pic-only' src={`http://localhost:5173/${displayProjects[selectedCardIndex].imageUrls[1]}`} alt={`First Image`} />
                    )}
                  </div>
                </section>
                <section>
                  <div className='content-container'>

                  <h4>second section</h4>
                  <p className='.history-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid maiores nostrum repudiandae corporis excepturi quaerat minima reiciendis sapiente at optio, quas itaque, vitae quam odio maxime tenetur exercitationem? Fugiat, earum?</p>
                  {displayProjects[selectedCardIndex].imageUrls[2] && (
                    <img className='single-pic-only' src={`http://localhost:5173/${displayProjects[selectedCardIndex].imageUrls[2]}`} alt={`First Image`} />
                    )}
                  </div>
                </section>
                <section>
                  <div className='content-container'>

                  <h4>first section</h4>
                  {displayProjects[selectedCardIndex].imageUrls[3] && (
                    <img className='single-pic-only' src={`http://localhost:5173/${displayProjects[selectedCardIndex].imageUrls[3]}`} alt={`First Image`} />
                    )}
                    <p className='.history-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid maiores nostrum repudiandae corporis excepturi quaerat minima reiciendis sapiente at optio, quas itaque, vitae quam odio maxime tenetur exercitationem? Fugiat, earum?</p>
                  </div>
                </section>
                
              </div>
            </div>
          ) : ( 
            <div className={`pics-container `}>
              {displayProjects.map((project, index) => (
                <div className={`pic-card `} 
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  <div className='pic-container'>
                    {project.imageUrls[0] && (
                      <AdvancedImage className='pic-only' cldImg={cld.image(`${project.imageUrls[0]}`).resize(fill().width(540).height(280))} alt={`First Image`} />
                    )}
                  </div>
                  <h3>{project.name}</h3>
                  <p className='pic-description'>{project.description}</p>
                  <div className='pic-description'></div>
                </div>
              ))}
            </div>
          )}
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
 * ${selectedCardIndex === index ? 'expanded' : ''}
 * 
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