import { useState } from 'react';
import './ProjectSlide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faE, faJ, faO, faP, faR, faS, faT } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

function ProjectSlide({ onNavigation }) {
    const [isSlideClicked, setIsSlideClicked] = useState(false);

    const handleClick = (page) => {
        onNavigation(page);
      };
    const handleIconClick = () => {
        setIsSlideClicked(!isSlideClicked);
        
      };

    return (
        <div 
            className={`project-glass `}
            >
            <div className={`font-list-container ${isSlideClicked ? 'move-left' : ''}`} >
                <div className={`font-container`}
                    onClick={handleIconClick}>
            
                    <div className='project'>
                    
                        <FontAwesomeIcon className='alpha alpha-p' icon={faP} />
                    </div>
                    <div className='project'>
                        <FontAwesomeIcon className='alpha alpha-r' icon={faR} />
                    </div>
                    <div className='project'>
                        <FontAwesomeIcon className='alpha alpha-o' icon={faO} />
                    </div>
                    <div className='project'>
                        <FontAwesomeIcon className='alpha alpha-j' icon={faJ} />
                    </div>
                    <div className='project'>
                        <FontAwesomeIcon className='alpha alpha-f' icon={faE} />
                    </div>
                    <div className='project'>
                        <FontAwesomeIcon className='alpha alpha-c' icon={faC} />
                    </div>
                    <div className='project'>
                        <FontAwesomeIcon className='alpha alpha-t' icon={faT} />
                    </div>
                    <div className='project'>
                        <FontAwesomeIcon className='alpha alpha-s' icon={faS} />
                    </div>
                </div>
                <div className='list-container'>
                    <ul>
                        <Link 
                            onClick={() => handleClick('gallery')}
                            className='navlink-text' to='/gallery'>to Gallery</Link>

                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectSlide;