import React, { useState } from 'react';

import './login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className='login-glass'>Login
        <div className='container'>    
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
              <button 
                type="button" 
                className="password-toggle-btn" 
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <input type="button" value='login' /><br />
            <a href="#">Forgot Password?</a>
          </form>
          <div className="drops">
            <div className="drop drop-1"></div>
            <div className="drop drop-2"></div>
            <div className="drop drop-3"></div>
            <div className="drop drop-4"></div>
            <div className="drop drop-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;