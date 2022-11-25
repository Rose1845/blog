import React from 'react'
import { useParams } from 'react-router-dom'
import articles from '../article'

const ArticlePage = () => {

  const params = useParams()

  const {articleId}=params
  const article=articles.find(article=>article.name === articleId)

  return ( 
    <div>
       
        <div key={article.name}>
          <h2>{article.title}</h2>
         <p>{article.content}</p>
        </div>
      
    </div>
  )
}
       
export default ArticlePage