import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import LoginForm from '../Auth/LoginForm';
import RegisterForm from '../Auth/RegisterForm';
import { loginUser } from '../../store/session';
import Logo from './Logo';


const Welcome = () => {
  const dispatch = useDispatch();
  const [loginIsHidden, setLoginIsHidden] = useState(false);

  const toggleLoginIsHidden = () => {
    setLoginIsHidden(!loginIsHidden)
  }

  const demoLogin = () => {
    (async() => {
      const [credential, password] = ['DemoUser', 'password']
      dispatch(loginUser(credential, password))
    })();
  }

  return (
    <React.Fragment>
      <div className='welcome__background'>
        <div className='welcome__info__container'>
          <div className='welcome__info'>
            <div className='welcome__logo'><Logo /></div>
            <div className='welcome__byline'>The truth is out there.</div>
            <div className='welcome__byline'>Verity is your portal.</div>
            <p></p>
            <div className='welcome__description'>
              Today we have access to more information than ever before, but sometimes it can be hard knowing who to trust.
            </div>
            <div className='welcome__description--tag'>
              Filter out the noise with Verity.
            </div>
          </div>
          <div className='auth__form'>
            { loginIsHidden ? (
              <RegisterForm 
                toggleLoginIsHidden={toggleLoginIsHidden}
                demoLogin={demoLogin}
              />
            ) : (
              <LoginForm 
                toggleLoginIsHidden={toggleLoginIsHidden} 
                demoLogin={demoLogin}
              />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default Welcome;