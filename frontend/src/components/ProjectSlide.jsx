import React, { useState } from 'react';
import './ProjectSlide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faE, faJ, faO, faP, faR, faS, faT } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

function ProjectSlide() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(clicked); // Um den Klick jedes Mal umzuschalten
    };

    return (
        <div
            className={`project-glass `}
            
        >   
            <div className='font-list-container'>
                <div 
                    className={`'font-container${clicked ? 'clicked' : ''}`}
                    onClick={handleClick}    
                >
                    <div className='project '>
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
                        <Link to='/gallery' />Gallery
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