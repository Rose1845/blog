import React from 'react'
import articles from '../article'
import ArticleList from '../components/ArticleList'

import { Link } from 'react-router-dom'
const ArticleListPage = () => {
  return (
   <React.Fragment>
   
    <ArticleList className="articlelist" articles={articles}/>
  
   </React.Fragment>
  )
}

export default ArticleListPage