import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import articles from '../article'
import axios from 'axios'
import NotFoundPage from './NotFoundPage'


const ArticlePage = () => {

  const params = useParams()

  const {articleId}=params
  const article=articles.find(article=>article.name === articleId)

  const [articleInfo,setArticleInfo]=useState({upvotes:0,comment:[]})
  
 const url = `http://localhost:8000/api/articles/${articleId}`
  useEffect(()=>{
    const loadArticleInfo=async()=>{
      const response= await axios.get(url)
      const newArticleInfo=response.data
      setArticleInfo(newArticleInfo)
    }
    loadArticleInfo()
  },[])
  if(!article){
    return <NotFoundPage/>
  }

  return ( 
    <>
        <div className='articlePage' key={article.name}>
         <p>this article has {articleInfo.upvotes}</p>
          <h2 className='articleTitle'>{article.title}</h2>
          <p className='articleDesc'>{article.content}</p>
         
        </div>
      
    </>
  )
}
       
export default ArticlePage