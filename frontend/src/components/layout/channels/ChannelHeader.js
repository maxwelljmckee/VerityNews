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
        <Fragment>
          <div className='channel__header'>
            <div className='channel__header-group1'>
              <i onClick={toggleIsHidden} className="fas fa-angle-right"></i>
              <div onClick={toggleIsHidden} >Your Channels</div>
            </div>
            <div className='channel__header-group2'>
              <i className="fas fa-plus" onClick={toggleFormIsHidden} ></i>
            </div>
          </div>
          {!formIsHidden && <NewChannelForm setFormIsHidden={toggleFormIsHidden} /> }
        </Fragment>
      ) : (
        <Fragment>
          <div className='channel__header'>
            <div className='channel__header-group1'>
              <i onClick={toggleIsHidden} className="fas fa-angle-down"></i>
              <div onClick={toggleIsHidden} >Your Channels</div>
            </div>
            <div className='channel__header-group2'>
              <i className="fas fa-plus" onClick={toggleFormIsHidden} ></i>
            </div>
          </div>
          {!formIsHidden && <NewChannelForm setFormIsHidden={setFormIsHidden} />}
          <ChannelList />
        </Fragment>
      )}
    </div>
  )
}


export default ChannelHeader;