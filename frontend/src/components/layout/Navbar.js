import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';


import ProfileButton from '../ProfileButton';
import Settings from '../Auth/Settings';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);

  const user = useSelector(state => state.session.user)

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  }

  useEffect(() => {
    setIsHidden(true);
  }, [])

  return (
    <div className='navbar'>
      <Link to='/explore' >
        <i className="fas fa-home" />
      </Link>
      <a target='_blank' rel='noreferrer' 
        href='https://github.com/maxwelljmckee/Verity/'>
        <i className="fab fa-github" />
      </a>
      <div className='position__box'>
        <i onClick={toggleIsHidden} className="fas fa-cog" />
        { !isHidden && 
          <Settings onBlue={toggleIsHidden} />
        }
      </div>
    </div>
  )
}


export default Navbar;