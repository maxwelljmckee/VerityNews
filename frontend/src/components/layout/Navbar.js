import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link, useHistory } from 'react-router-dom';


import ProfileButton from '../ProfileButton';
import Settings from '../Auth/Settings';
import { fetchSources } from '../../store/sources';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const dispatch = useDispatch();
  // const user = useSelector(state => state.session.user);
  const history = useHistory();

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  }

  const handleClick = () => {
    const setSources = async() => {
      dispatch(fetchSources);
    }
    setSources()
    history.push('/explore')
  }

  useEffect(() => {
    setIsHidden(true);
  }, [])

  return (
    <div className='navbar'>
      <Link to='/explore'>
        <i className="fas fa-home" onClick={handleClick} />
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