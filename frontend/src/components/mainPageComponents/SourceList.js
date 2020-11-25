import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { fetchSources } from '../../store/sources';
import Loading from '../Loading';
import SourceCard from './SourceCard';



const SourceList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  let sources = useSelector(state => state.sources);
  const dispatch = useDispatch();
  // const history = useHistory();

  const { category } = useParams();
  if (category) {
    sources = sources.filter(source => source.category === category.toLowerCase());
  }

  if (searchTerm) {
    sources = sources.filter(source => 
      source.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  useEffect(() => {
    const getSources = async () => {
      dispatch(fetchSources());
    }
    getSources();
  }, [dispatch, category]);

  return (
    <div className='sources__container'>
      <div className='sources__searchbar'>
        {/* <form onSubmit={handleSubmit}> */}
          <input 
            type='text'
            placeholder='Search by Publication Name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        {/* </form> */}
      </div>
      { sources ? (
        <div className='source__card__container'>
          {sources.map(source => {
            return <SourceCard key={source.id} source={source} />
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}


export default SourceList;