import React from 'react'
import { useEffect } from 'react';
import './RightNav.css'

function RightNav() {

    useEffect(() => {
        const handleScroll = () => {
          const rightNav = document.querySelector('.glass-right');
    
          if (rightNav) {
           
            const scale = window.scrollY > 0 ? 0 : 0.5;       
            rightNav.style.transition = 'transform 0.5s';
            rightNav.style.transform = `scale(${scale})`;
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div className='glass-right'>glass-container</div>
  )
}

export default RightNav