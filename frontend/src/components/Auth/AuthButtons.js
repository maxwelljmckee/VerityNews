import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import ProfileButton from '../ProfileButton';


const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const user = useSelector(state => state.session.user)

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='navbar'>
      {/* <div className='navbar__search'>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div> */}
      <div className='navbar__links'>
        <NavLink to='/register'>Sign Up</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <Link to='/logout'>Logout</Link>
        {user && <ProfileButton user={user} />}
      </div>
    </div>
  )
}


export default Navbar;