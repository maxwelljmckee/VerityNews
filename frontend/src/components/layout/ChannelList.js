import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const ChannelList = () => {
  const channels = useSelector(state => state.channels)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {

  }, [])

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  }

  return (
    <div className='channel__list'>
      {}
    </div>
  )
}


export default ChannelList;