import React from 'react'
//import articles from '../article'

import { Link } from 'react-router-dom'
const ArticleList = ({articles}) => {
  return (
    <React.Fragment>
      <div className='card'>
       {articles.map(article=>(
      <Link key={article.name}to={`/articles/${article.name}`} className='articlelist'>
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0,150)}</p>
      </Link>
    ))}
       </div>
    </React.Fragment>
  )
}

export default ArticleList