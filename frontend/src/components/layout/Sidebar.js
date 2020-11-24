import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import Logo from '../Logo'
import ChannelList from './ChannelList';


const Sidebar = () => {
  const user = useSelector(state => state.session.user)

  const [isHidden, setIsHidden] = useState(false)

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  }

  return (
    <Fragment>
      <div className='sidebar'>
        <Logo />
        { user && <h2 className='welcome__message'>Welcome {user.username}</h2>}
        <div className='channel__container'>
            { isHidden ? (
              <div className='channel__header'>
                <i onClick={toggleIsHidden} className="far fa-caret-square-right"></i>
                <div>Your Channels</div>
              </div>
            ) : (
              <Fragment>
                <div className='channel__header'>
                  <i onClick={toggleIsHidden} className="far fa-caret-square-down"></i>
                  <div>Your Channels</div>
                  <div>Loading...</div>
                </div>
                <ChannelList />
              </Fragment>
            )
            }
        </div>
        <div className='board__container'>

        </div>
      </div>
    </Fragment>
  )
}


export default Sidebar;