import React from 'react'
import articles from '../article'
import ArticleList from '../components/ArticleList'

import { Link } from 'react-router-dom'
const ArticleListPage = () => {
  return (
   <React.Fragment>
    <h1>Articles</h1>
    <ArticleList articles={articles}/>
   </React.Fragment>
  )
}

export default ArticleListPage