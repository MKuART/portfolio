import './LeftNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons'; 
import { NavLink } from 'react-router-dom';

function LeftNav({ onNavigation }) {
  const handleClick = (page) => {
    onNavigation(page);
  };
  return (
    <div className='glass-left-container'>
      <div className='glass-left'
          onClick={() => handleClick('about')}>
        <NavLink 
          to='/about'></NavLink>
        <p className='avatar'><FontAwesomeIcon icon={faUserTie} /></p>
      </div>
    </div>
  )
}

export default LeftNav