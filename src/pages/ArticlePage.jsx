import React from 'react'
import { useParams } from 'react-router-dom'
import articles from '../article'
import NotFoundPage from './NotFoundPage'


const ArticlePage = () => {

  const params = useParams()

  const {articleId}=params
  const article=articles.find(article=>article.name === articleId)
  
  if(!article){
    return <NotFoundPage/>
  }

  return ( 
    <>
        <div className='articlePage' key={article.name}>
         
          <h2 className='articleTitle'>{article.title}</h2>
          <p className='articleDesc'>{article.content}</p>
         
        </div>
      
    </>
  )
}
       
export default ArticlePage