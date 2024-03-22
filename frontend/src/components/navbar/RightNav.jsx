import React, { useEffect } from 'react';
import './rightNav.css';

function RightNav() {
    useEffect(() => {
        const handleScroll = () => {
            console.log("Scroll event triggered!");
            const rightNav = document.querySelector('.glass-right');
            console.log("rightNav:", rightNav);
            if (rightNav) {
                const scale = window.scrollY > 0 ? 0.5 : 1;
                console.log("scale:", scale);
                rightNav.style.transition = 'transform 0.5s';
                rightNav.style.transform = `scaleY(${scale})`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='glass-right'>glass-container</div>
    );
}

export default RightNav;
