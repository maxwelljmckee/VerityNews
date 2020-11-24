import React from 'react';
import { Link } from 'react-router-dom';


const Settings = () => {
  return (
    <div className='settings__menu'>
      <Link to='/logout'>Logout</Link>
    </div>
  )
}


export default Settings;