import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChannelItem from './ChannelItem';
import { fetchChannels } from '../../../store/channels';


const ChannelList = () => {
  const channels = useSelector(state => state.channels)
  const dispatch = useDispatch();

  useEffect(() => {

    console.log('hello from postChannel');
    const loadChannels = async () => {
      dispatch(fetchChannels())
    }
    loadChannels()
  }, [dispatch])

  return (
    <div className='channel__list'>
      {}
      {channels.map(channel => {
        return <ChannelItem key={channel.id} channel={channel} />
      })}
    </div>
  )
}


export default ChannelList;