import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../store/session';


const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const user = { email, password, username }
      dispatch(registerUser(user)).catch((res) => 
        { if (res.data && res.data.errors) setErrors(res.data.errors) });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  }


  return (
    <React.Fragment>
      <h1>register form</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <input
          name='email'
          type='email'
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          name='username'
          type='text'
          placeholder='Enter a Username'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <input
          name='password'
          type='password'
          placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          name='confirmPassword'
          type='password'
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}


export default RegisterForm;