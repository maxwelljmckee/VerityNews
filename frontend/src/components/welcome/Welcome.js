import React, { useState } from 'react';

import AuthButtons from '../Auth/AuthButtons';
import LoginForm from '../Auth/LoginForm';
import RegisterForm from '../Auth/RegisterForm';
import Logo from '../Logo';


const Welcome = () => {
  const [loginIsHidden, setLoginIsHidden] = useState(false);

  const toggleLoginIsHidden = () => {
    setLoginIsHidden(!loginIsHidden)
  }

  return (
    <React.Fragment>
      <div className='welcome__background'>
        <div className='welcome__info__container'>
          <div className='welcome__info'>
            <div className='welcome__logo'>Verity News (logo)</div>
            <div className='welcome__byline'>The truth is out there.</div>
            <div className='welcome__byline'>Verity is your portal.</div>
            <p></p>
            <div className='welcome__description'>
              Today we have access to more information than ever before, but sometimes it can be hard knowing who to trust.
            </div>
            <div className='welcome__description'>
              Filter out the noise with Verity.
            </div>
          </div>
          <div className='auth__form'>
            { loginIsHidden ? (
              <RegisterForm toggleLoginIsHidden={toggleLoginIsHidden}/>
            ) : (
              <LoginForm toggleLoginIsHidden={toggleLoginIsHidden} />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default Welcome;