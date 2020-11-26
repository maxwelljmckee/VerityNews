import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteChannel } from '../../../store/channels';
import ChannelSourceList from './ChannelSourceList';


const ChannelItem = ({ channel }) => {
  const [isHidden, setIsHidden] = useState(true);
  const dispatch = useDispatch();

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  }

  const handleDelete = () => {
    (async() => {
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
              <Link to={`/channels/${channel.name}`}>
                <i className="fas fa-arrow-circle-right"></i>
              </Link>
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
                <Link to={`/channels/${channel.id}`}>
                  <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            <ChannelSourceList channel={channel} />
          </Fragment>
        )}
    </div>
  )
}


export default ChannelItem;