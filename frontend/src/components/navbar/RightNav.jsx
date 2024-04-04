import { useState } from 'react';
import './rightNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCode, faEye, faEyeSlash, faImage, faMusic, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Outlet } from 'react-router-dom';

function RightNav({ onNavigation }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = (page) => {
        onNavigation(page);
      };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div>
        <div className='glass-right' onClick={toggleDropdown}>
            <div className='drop-down-container' >
                <FontAwesomeIcon className='burger-icon' icon={faBars}  />
                {showDropdown && (
                    <div className='dropdown-menu'>
                    <div 
                      className='home-con all-con'
                      onClick={() => handleClick('parallax')}>
                      <NavLink className='navlink-text' to='/'>Home</NavLink>
                    </div>
                    <div 
                      className='gallery-con all-con'
                      onClick={() => handleClick('gallery')}>
                      <NavLink className='navlink-text' to='/gallery'>Gallery</NavLink>
                    </div>
                    <div 
                      className='about-con all-con'
                      onClick={() => handleClick('about')}>
                      <NavLink className='navlink-text' to='/about'>About</NavLink>
                    </div>
                    <div 
                      className='contact-con all-con'
                      onClick={() => handleClick('about')}>
                      <NavLink className='navlink-text' to='/contact'>Contact</NavLink>
                    </div>
                  </div>
                )}
            </div>
        </div>
        </div>
    );
}

export default RightNav;
// https://codepen.io/catalinred/pen/kPEXJO DropDown

/**
 *     useEffect(() => {
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

 *                   <FontAwesomeIcon className='instagram scial-media' icon={faInstagram} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faYoutube} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faGoogle} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faEye} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faEyeSlash} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faCode} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faImage} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faGithub} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faMusic} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faLinkedin} />
 */