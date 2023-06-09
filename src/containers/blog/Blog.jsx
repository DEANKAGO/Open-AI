import React from 'react';
import { Article } from '../../componets';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';


const Blog = () => {
  return (
    <div className='gpt__blog section__padding' id='blog'>
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">A lot is happening <br/> We are blogging about it.</h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container__groupA">
          <Article imgUrl={blog01} date="sep 26, 2021" text="Open AI is the future"/>
        </div>
        <div className="gpt__blog-container__groupB">
        <Article imgUrl={blog02} date="sep 26, 2021" text="Open AI is the future"/>
        <Article imgUrl={blog03} date="sep 26, 2021" text="Open AI is the future"/>
        <Article imgUrl={blog04} date="sep 26, 2021" text="Open AI is the future"/>
        <Article imgUrl={blog05} date="sep 26, 2021" text="Open AI is the future"/>
        </div>
      </div>
    </div>
  )
}

export default Blog