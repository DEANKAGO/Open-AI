import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => {
  return (
    <div className='gpt__blog-container__article'>
      <div className="gpt__blog-container__article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt__blog-container__article-content">
        <p>{date}</p>
        <h3>{text}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article