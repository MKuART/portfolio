import React, { useState } from 'react';
import './ProjectSlide.css';

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
            projectSlide
        </div>
    );
}

export default ProjectSlide;