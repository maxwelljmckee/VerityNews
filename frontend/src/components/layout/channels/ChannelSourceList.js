import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchChannelSources } from '../../../store/channelSources';
import { deleteChannelSource } from '../../../store/channelSources';


const ChannelSourceList = ({ channel }) => {
  // const [sourceList, setSourceList] = useState('');
  const channelSources = useSelector(state => state.channelSources);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      dispatch(fetchChannelSources({ channelId: channel.id }));
    })();
  }, [dispatch, channel.id])

  const handleDelete = (e) => {
    e.preventDefault()
    const sourceId = parseInt(e.target.id.split('-')[1], 10)
    console.log('source id:', sourceId);
    (async() => {
      dispatch(deleteChannelSource({ 
        channelId: channel.id,
        sourceId
      }))
    })();
  }

  const sourceList = channelSources.filter(cs => cs.channelId === channel.id)

  return (
    <Fragment>
      { sourceList.length ? (
        <ul className='cs__list'>
          { sourceList.map(cs => {
            console.log(cs);
            return (
              <div key={cs.Source.id} className='cs__list__item'>
                <li>{cs.Source.name}</li>
                <i className="fas fa-minus"
                  id={`minus_button-${cs.Source.id}`}
                  onClick={handleDelete}
                />
              </div>
          )})}
        </ul>
      ) : (
        <div>channel empty</div>
      )}
    </Fragment>
  )
}


export default ChannelSourceList;