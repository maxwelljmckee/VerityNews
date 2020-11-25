import React, { Fragment, useEffect, useState } from 'react';

import DeleteChannelButton from './NewChannelForm'


const ChannelItem = ({ channel }) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  }

  const deleteChannel = () => {
    console.log('delete channel');
  }

  useEffect(() => {
    setIsHidden(true);
  }, [])

  return (
    <div className='channel__item__container'>
      { isHidden ? (
        <Fragment>
          <div className='channel__item__header'>
            <div className='channel__item__header-group1'>
              <i onClick={toggleIsHidden} className="fas fa-angle-right"></i>
              <div onClick={toggleIsHidden} >{channel.name}</div>
            </div>
            <div className='channel__item__header-group2'>
              <i className="fas fa-minus" onClick={deleteChannel} ></i>
            </div>
          </div>
        </Fragment>
      ) : (
          <Fragment>
            <div className='channel__item__header'>
              <div className='channel__item__header-group1'>
                <i onClick={toggleIsHidden} className="fas fa-angle-down"></i>
                <div onClick={toggleIsHidden} >{channel.name}</div>
              </div>
              <div className='channel__item__header-group2'>
                <i className="fas fa-minus" onClick={deleteChannel} ></i>
              </div>
            </div>
            {/* <ChannelSourceList /> */}
          </Fragment>
        )}
    </div>
  )
}


export default ChannelItem;