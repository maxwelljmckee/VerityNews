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
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  let articles = useSelector(state => state.articles);
  const channels = useSelector(state => state.channels);
  const currentChannel = channels.find(channel => channel.id.toString() === channelId);
  
  if (searchTerm) {
    articles = articles.filter(article => {
      return article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    })
  }

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
    <div>
      <div className='main__page__container'>
        <div className='main__page__group-1'>
          <Sidebar />
        </div>
        <div className='main__page__group-2'>
          <Navbar />
          <div className='article__card__container'>
            { currentChannel && <h1 className='article__card__channel-name'>          
              {currentChannel.name}</h1> }
            <div className='articles__searchbar'>
              <input
                type='text'
                placeholder='Search by Keyword'
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
    </div>
  )
}

export default ArticlesIndex;