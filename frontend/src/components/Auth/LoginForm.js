import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../store/session';


const LoginForm = ({ toggleLoginIsHidden, demoLogin }) => {
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credential, password)).catch((res) => 
      { if (res.data && res.data.errors) setErrors(res.data.errors) });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <input
          name='credential'
          type='text'
          placeholder='Enter Username or Email'
          onChange={(e) => setCredential(e.target.value)}
          value={credential}
          required
        />
        <input
          name='password'
          type='password'
          placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
        <button type='button' onClick={toggleLoginIsHidden}>to Sign Up</button>
        <div>– or –</div>
        <button type='button' onClick={demoLogin}>Login as Demo User</button>
      </form>
    </React.Fragment>
  )
}

export default LoginForm;
