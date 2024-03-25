import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faAngleLeft } from '@fortawesome/free-solid-svg-icons'; 

import './login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(faArrowRightToBracket);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleIconClick = () => {
    setIsIconClicked(!isIconClicked);
    setCurrentIcon(currentIcon === faArrowRightToBracket ? faAngleLeft : faArrowRightToBracket); 
    if (!isIconClicked) {
      const drop5 = document.querySelector('.drop-5');
      drop5.style.left = '100px';
    }
  };

  return (
    <div>
      <div className='login-glass'>
        <div className={`container ${isIconClicked ? 'move-right' : ''}`}>
          <form action="">
            <p>Login</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Email'
            />
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>
                <input
                  type="checkbox"
                  className="password-toggle-btn"
                  onClick={togglePasswordVisibility}
                />
                {showPassword ? "hide password" : "show password"}
              </label>
            </div>
            <input type="button" value='login' /><br />
            <a href="#">Forgot Password?</a>
          </form>
          <div className="drops">
            <div className="drop drop-1"></div>
            <div className="drop drop-2"></div>
            <div className="drop drop-3"></div>
            <div className="drop drop-4" onClick={handleIconClick}>
              <FontAwesomeIcon className={`login-button ${isIconClicked ? 'icon-clicked' : ''}`} icon={currentIcon} />
            </div>
            <div className="drop drop-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;



