import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { addChannelSources } from '../../store/channelSources';


const SourceCard = ({ source }) => {
  const [formIsHidden, setFormIsHidden] = useState(true);
  const [animation, setAnimation] = useState(false)
  const channels = useSelector(state => state.channels)

  const toggleFormIsHidden = () => {
    setFormIsHidden(!formIsHidden);
  }


  useEffect(() => {
    setFormIsHidden(true);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <Fragment>
      { formIsHidden ? (
        <div 
          className={`${ animation ? 'source__card__logo flip-vertical-left ' 
            : 'source__card__logo' }`}
          onClick={() => {
              setAnimation(true)
              toggleFormIsHidden()
              setAnimation(false)
          }}
        >
          <img src={source.imageUrl} alt={source.name} />
        </div>
      ) : (
        <div className='source__card__form flip-vertical-left'>
            <i className="fas fa-times"
              onClick={() => {
                setAnimation(true)
                toggleFormIsHidden()
                setAnimation(false)
              }} />
          <ul>
            <div>Choose a Channel</div>
            {channels.map(channel => {
              return <li key={channel.id}>{channel.name}</li>
            })}
          </ul>
        </div>
      )}
    </Fragment>
  )
}


export default SourceCard;