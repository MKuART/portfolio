import './LeftNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons'; 

function LeftNav() {
  return (
    <div className='glass-left-container'>
      <div className='glass-left'>
        <p className='avatar'><FontAwesomeIcon icon={faUserTie} /></p>
      </div>
    </div>
  )
}

export default LeftNav