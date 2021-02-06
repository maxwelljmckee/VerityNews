import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../welcome/Logo';
import ChannelHeader from './channels/ChannelHeader';



const MeetDev = () => {
  const [hide, setHide] = useState(true);

  const toggleHide = () => {
    setHide(!hide)
  }

  return (
    <div className='meet-dev__container'>
      { hide ?
        <div onClick={toggleHide} className='meet-dev__header'>
          <i className="fas fa-angle-right"></i>
          Meet the Developer!
        </div>
        :
        <>
          <div onClick={toggleHide} className='meet-dev__header'>
            <i className="fas fa-angle-down"></i>
            Meet the Developer!
          </div>
          <div className='meet-dev__info fade-in'>
            <img src='https://ca.slack-edge.com/T03GU501J-U0173CXKZGD-cdadb0380e42-512' alt='portrait' />
            <div className='name'>Maxwell McKee</div>
            <div className='meet-dev__links'>
              <a target='_blank' href='https://mmckee-dev.com/'>
                <div className='portfolio'>Portfolio</div>
              </a>
              <a target='_blank' href='https://www.linkedin.com/in/maxwell-mckee-385599191/'>
                <div className='linkedin'>linkedIn</div>
              </a>
              <a target='_blank' href='https://angel.co/u/maxwell-mckee'>
                <div className='angellist'>AngelList</div>
              </a>
            </div>
          </div>
        </>
      }
    </div>
  )
}



const Sidebar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <Fragment>
      <div className='sidebar'>
        <div className='sidebar__logo'>
          <Link to='/explore'><Logo /></Link>
        </div>
        { user && <h2 className='welcome__message'>Welcome {user.username}</h2>}
        <div className='sidebar__items'>
          <ChannelHeader />
          <div className='board__container'>

          </div>
          <MeetDev />
        </div>
      </div>
    </Fragment>
  )
}


export default Sidebar;