import React, { Fragment, useEffect, useState } from 'react';

import ChannelList from './ChannelList';
import NewChannelForm from './NewChannelForm';


const ChannelHeader = () => {
  const [isHidden, setIsHidden] = useState(false);
  
  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  }

  const [formIsHidden, setFormIsHidden] = useState(true);

  const toggleFormIsHidden = () => {
    setFormIsHidden(!formIsHidden);
  }

  useEffect(() => {
    setFormIsHidden(true);
  }, [])

  return (
    <div className='channel__container'>
      { isHidden ? (
        <div className='channel__header'>
          <div className='channel__header-group1'>
            <i onClick={toggleIsHidden} className="fas fa-angle-right"></i>
            <div>Your Channels</div>
          </div>
          <div className='channel__header-group2'>
            {/* <i className="fas fa-plus" onClick={toggleFormIsHidden} ></i> */}
            <NewChannelForm />
          </div>
        </div>
      ) : (
          <Fragment>
            <div className='channel__header'>
              <div className='channel__header-group1'>
                <i onClick={toggleIsHidden} className="fas fa-angle-down"></i>
                <div>Your Channels</div>
              </div>
              <div className='channel__header-group2'>
                {/* <i className="fas fa-plus" onClick={toggleFormIsHidden} ></i> */}
                <NewChannelForm />
              </div>
            </div>
            <ChannelList />
          </Fragment>
        )}
    </div>
  )
}


export default ChannelHeader;