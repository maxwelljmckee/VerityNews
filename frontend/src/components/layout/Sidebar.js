import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import Logo from '../Logo'
import ChannelHeader from './channels/ChannelHeader';


const Sidebar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <Fragment>
      <div className='sidebar'>
        <Logo />
        { user && <h2 className='welcome__message'>Welcome {user.username}</h2>}
        <ChannelHeader />
        <div className='board__container'>

        </div>
      </div>
    </Fragment>
  )
}


export default Sidebar;