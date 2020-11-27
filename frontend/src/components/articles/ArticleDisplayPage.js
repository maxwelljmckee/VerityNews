import React from 'react';


const ArticleDisplayPage = ({ article, toggleIsVisible, timestamp }) => {
  const sourceName = article.sourceId.split('-')
    .map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className='article__display__page slide-in-right'>
      <i className="fas fa-times" onClick={toggleIsVisible} />
      <h2 className='article__display__source'>{sourceName}</h2>
      {/* <div className='article__display'> */}
      <img src={article.urlToImage} alt='' />
      <div className='article__display__info'>
        <div className='article__display__title'>{article.title}</div>
        <div className='article__display__author'>by: {article.author}</div>
        <div className='article__display__content'>{article.content}</div>
        <div className='article__display__url'>See full article content: 
          <div><a target='_blank' rel='noreferrer' href={article.url}>{article.url}</a></div></div>
        <div className='article__display__timestamp'>{timestamp(article.publishedAt)}</div>
      {/* </div> */}
      </div>
    </div>
  )
}

export default ArticleDisplayPage;