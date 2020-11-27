import React, { useState, useEffect, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import dateFormat from 'dateformat';

import ArticleDisplayPage from './ArticleDisplayPage';


const ArticleCard = ({ article }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    setIsVisible(false)
  }, [])

  const timestamp = (date) => {
    return dateFormat(date, 'ddd, mmm d yyyy, h:MMTT')
  }

  return (
    <Fragment>
      <div className='article__card' onClick={toggleIsVisible}>
        <img src={article.urlToImage} alt=''/>
        <div className='article__card__info'>
          <div className='article__card__title'>{article.title}</div>
          <div className='article__card__author'>by: {article.author}</div>
          <div className='article__card__description'>{article.description}</div>
          <div className='article__card__timestamp'>{timestamp(article.publishedAt)}</div>
        </div>
      </div>
      { isVisible && <ArticleDisplayPage
        key={article.id}
        article={article}
        toggleIsVisible={toggleIsVisible}
        timestamp={timestamp}
      />}
    </Fragment>
  )
}

export default ArticleCard;