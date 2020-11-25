import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteChannel } from '../../../store/channels';
import ChannelSourceList from './ChannelSourceList';


const ChannelItem = ({ channel, idx }) => {
  const [isHidden, setIsHidden] = useState(true);
  const dispatch = useDispatch();

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  }

  const handleDelete = () => {
    (async(idx) => {
      dispatch(deleteChannel({ channelId: channel.id }))
    })();
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
              <i className="fas fa-minus" onClick={handleDelete} ></i>
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
                <i className="fas fa-minus" onClick={handleDelete} ></i>
              </div>
            </div>
            <ChannelSourceList />
          </Fragment>
        )}
    </div>
  )
}


export default ChannelItem;