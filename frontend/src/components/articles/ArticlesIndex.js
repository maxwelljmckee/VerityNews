import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar'
import ArticleCard from './ArticleCard';
import { fetchArticlesFromChannel } from '../../store/articles';
import { fetchArticlesFromSource } from '../../store/articles';


const ArticlesIndex = () => {
  const { channelId, sourceId } = useParams();
  const [searchTerm, setSearchTerm] = useState();
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);
  const channels = useSelector(state => state.channels);
  // channels.forEach(channel => console.log(channel.id.toString()));
  // console.log(channelId);
  const currentChannel = channels.find(channel => channel.id.toString() === channelId);
  console.log(currentChannel);
  // const params = useParams();

  // console.log('params', params);

  useEffect(() => {
    (async() => {
      if (channelId) {
        dispatch(fetchArticlesFromChannel({ channelId }))
      } else if (sourceId) {
        dispatch(fetchArticlesFromSource({ sourceId }))
      }
    })();
  }, [dispatch, channelId, sourceId]);

  return (
    <Fragment>
      <div className='main__page__container'>
        <div className='main__page__group-1'>
          <Sidebar />
        </div>
        <div className='main__page__group-2'>
          <Navbar />
          <div className='article__card__container'>
            {currentChannel ? 
              <h1 className='article__card__channel-name'>{currentChannel.name}</h1>
              : <div></div>
            }
            <div className='articles__searchbar'>
              <input
                type='text'
                placeholder='Search by '
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            { articles.map(article => {
              return <ArticleCard key={article.id} article={article} />
            })}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ArticlesIndex;