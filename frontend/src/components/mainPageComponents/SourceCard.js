import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addChannelSource } from '../../store/channelSources';


const SourceCard = ({ source }) => {
  const [formIsHidden, setFormIsHidden] = useState(true);
  const [animation, setAnimation] = useState(false)

  const channels = useSelector(state => state.channels)
  const dispatch = useDispatch();
  
  useEffect(() => {
    setFormIsHidden(true);
  }, [])

  const toggleFormIsHidden = () => {
    setFormIsHidden(!formIsHidden);
  }

  const handleClick = (e) => {
    e.preventDefault();
    const channelId = e.target.id.split('-')[1];
    dispatch(addChannelSource({
      channelId,
      sourceId: source.id
    }))
    setFormIsHidden(true)
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
          <div className='x-icon'>
            <i className="fas fa-times" id='see-logo'
              onClick={() => {
                setAnimation(true)
                toggleFormIsHidden()
                setAnimation(false)
              }} />
          </div>
          <ul>
            <div key='title_div'>Add to Channel</div>
            {channels.map(channel => {
              return <li onClick={handleClick} 
                id={`channel-${channel.id}`} 
                key={channel.id}>{channel.name}</li>
            })}
          </ul>
          <div>– or –</div>
          <div>See Headlines 
            <Link to={`/sources/${source.encodedName}`}>
              <i className="fas fa-arrow-circle-right" id='see-headlines' />
            </Link>
          </div>
        </div>
      )}
    </Fragment>
  )
}


export default SourceCard;