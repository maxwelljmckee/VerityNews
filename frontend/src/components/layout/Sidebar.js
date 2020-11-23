import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Logo from '../Logo'


const Sidebar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <Fragment>
      <div className='sidebar'>
        <Logo />
        { user && <h2>Welcome {user.username}</h2>}
        <div className='channel__container'>
          <div className='channel__header'>
          <i class="far fa-caret-square-right"></i>
          <p>Your Channels</p>
          </div>
        </div>
        <div className='coard__container'>

        </div>
      </div>
    </Fragment>
  )
}


export default Sidebar;