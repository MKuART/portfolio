import { useEffect, useState } from 'react';
import './arrows.css';

function Arrows() {
    const [scrolledToSection1, setScrolledToSection1] = useState(false);
/* dont run like vision */
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.querySelector('.section1');
            if (section1) {
                const section1Top = section1.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (section1Top < windowHeight) {
                    setScrolledToSection1(true);
                } else {
                    setScrolledToSection1(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div className='arrow-container'>
        <div className={`arrow ${scrolledToSection1 ? 'animate' : ''}`}>
            <div className="shape1"></div>
            <div className="shape2"></div>
        </div>
        <div className={`arrow ${scrolledToSection1 ? 'animate' : ''}`}>
            <div className="shape1"></div>
            <div className="shape2"></div>
        </div>
    </div>
  )
}

export default Arrows