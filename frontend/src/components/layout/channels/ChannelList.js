import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChannelItem from './ChannelItem';
import { fetchChannels } from '../../../store/channels';


const ChannelList = () => {
  const channels = useSelector(state => state.channels)
  const dispatch = useDispatch();

  useEffect(() => {
    const loadChannels = async () => {
      dispatch(fetchChannels())
    }
    loadChannels()
  }, [dispatch])

  return (
    <Fragment>
      {channels.map(channel => {
        return <ChannelItem key={channel.id} channel={channel} />
      })}
    </Fragment>
  )
}


export default ChannelList;