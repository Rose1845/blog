import React from 'react'
import articles from '../article'

import { Link } from 'react-router-dom'
const ArticleListPage = () => {
  return (
   <React.Fragment>
    <h1>Articles</h1>
    {articles.map(article=>(
      <Link key={article.name}to={`/articles/${article.name}`} className='articlelist'>
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0,150)}</p>
      </Link>
    ))}
   </React.Fragment>
  )
}

export default ArticleListPage