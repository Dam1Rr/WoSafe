import { useState } from 'react';
import './AuthApp.css'

function AuthApp() {
  const [isRegister, setIsRegister] = useState(false); 

  const toggleForm = () => {
    setIsRegister(!isRegister); 
  };

  return (
    <div className="login-page">
      <div className="form">
        {isRegister ? (
          <form className="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">
              Already registered? <button onClick={toggleForm}>Sign In</button>
            </p>
          </form>
        ) : (
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p className="message">
              Not registered? <button onClick={toggleForm}>Create an account</button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthApp;
