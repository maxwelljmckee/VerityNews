import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Settings = () => {
  const dispatch = useDispatch();

  return (
    <div className='settings__menu'>
      <Link to='/logout'>Logout</Link>
    </div>
  )
}


export default Settings;