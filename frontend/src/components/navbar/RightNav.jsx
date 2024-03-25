import React, { useEffect } from 'react';
import './rightNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCode, faEye, faEyeSlash, faImage, faMusic } from '@fortawesome/free-solid-svg-icons';

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
        <div className='glass-right'>glass-container
            <div>
                  <FontAwesomeIcon className='instagram scial-media' icon={faInstagram} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faYoutube} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faGoogle} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faEye} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faEyeSlash} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faCode} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faImage} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faGithub} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faMusic} />
                  <FontAwesomeIcon className='youtube scial-media' icon={faLinkedin} />

            </div>
            <div className=''></div>

        </div>
    );
}

export default RightNav;
// https://codepen.io/catalinred/pen/kPEXJO DropDown