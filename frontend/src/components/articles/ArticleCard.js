import React from 'react';
import dateFormat from 'dateformat'


const ArticleCard = ({ article }) => {
  const timestamp = (date) => {
    return dateFormat(date, 'ddd, mmm d yyyy, h:MMTT')
  }

  const handleClick = () => {
    
  }

  return (
    <div className='article__card' onClick={handleClick}>
      <img src={article.urlToImage} alt=''/>
      <div className='article__card__info'>
        <div className='article__card__title'>{article.title}</div>
        <div className='article__card__author'>by: {article.author}</div>
        <div className='article__card__description'>{article.description}</div>
        <div className='article__card__timestamp'>{timestamp(article.publishedAt)}</div>
      </div>
    </div>
  )
}

export default ArticleCard;