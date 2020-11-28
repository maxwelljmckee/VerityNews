import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../welcome/Logo';
import ChannelHeader from './channels/ChannelHeader';


const Sidebar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <Fragment>
      <div className='sidebar'>
        <div className='sidebar__logo'>
          <Link to='/explore'><Logo /></Link>
        </div>
        { user && <h2 className='welcome__message'>Welcome {user.username}</h2>}
        <ChannelHeader />
        <div className='board__container'>
          
        </div>
      </div>
    </Fragment>
  )
}


export default Sidebar;