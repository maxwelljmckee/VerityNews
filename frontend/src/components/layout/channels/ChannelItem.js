import React, { Fragment, useEffect, useState } from 'react';

import DeleteChannelButton from './NewChannelForm'


const ChannelItem = ({ channel }) => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  }

  return (
    <h2>{channel.name}</h2>
    // <div className='channel__container'>
    //   { isHidden ? (
    //     <div className='channel__header'>
    //       <div className='channel__header-group1'>
    //         <i onClick={toggleIsHidden} className="fas fa-angle-right"></i>
    //         <div>Your Channels</div>
    //       </div>
    //       <div className='channel__header-group2'>
    //         <NewChannelButton />
    //       </div>
    //     </div>
    //   ) : (
    //       <Fragment>
    //         <div className='channel__header'>
    //           <div className='channel__header-group1'>
    //             <i onClick={toggleIsHidden} className="fas fa-angle-down"></i>
    //             <div>Your Channels</div>
    //           </div>
    //           <div className='channel__header-group2'>
    //             <NewChannelButton />
    //           </div>
    //         </div>
    //         <ChannelList />
    //       </Fragment>
    //     )}
    // </div>
  )
}


export default ChannelItem;