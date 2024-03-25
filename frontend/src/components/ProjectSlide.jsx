import React, { useState } from 'react';
import './ProjectSlide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faE, faJ, faO, faP, faR, faS, faT } from '@fortawesome/free-solid-svg-icons'; 

function ProjectSlide() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const containerClass = `project-glass ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`;

    return (
        <div
            className={containerClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >   
            <div className='font-list-container'>
                <div className='font-container'>
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
                        <li>
                            <a href="">listContent</a>
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