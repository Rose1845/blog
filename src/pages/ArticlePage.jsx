import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import articles from '../article'
import '../App.css'
import axios from 'axios'
import NotFoundPage from './NotFoundPage'
// import CommentsList from '../components/CommentsList'
import AddCommentForm from '../components/AddCommentForm'


const ArticlePage = () => {

  const params = useParams()

  const {articleId}=params
  const article=articles.find(article=>article.name === articleId)

  const urlUpvote=  'http://localhost:8000/api/articles'
  const addUpvote=async()=>{
    const response = await axios.put(`http://localhost:8000/api/articles/${articleId}/upvote`)
    const updatedData=response.data
    setArticleInfo(updatedData)
  }

  const [articleInfo,setArticleInfo]=useState({upvotes:0,comments:[]})
  
 const url = `http://localhost:8000/api/articles/${articleId}`

  useEffect(()=>{
    const loadArticleInfo=async()=>{
      const response= await axios.get(url,{
        credentials: 'include',
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
      })
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
          <div id='upvotes-section'>
          <button onClick={addUpvote}>Upvote</button>
          </div>
          <p>this article has {articleInfo.upvotes}</p>
          <h2 className='articleTitle'>{article.title}</h2>
          <p style={{fontSize:'10px'}} className='articleDesc'>{article.content}</p>
          <AddCommentForm articleName={articleId} onArticleUpdated={updatedArticle=>setArticleInfo(updatedArticle)}/>
          {/* <CommentsList comments={articleInfo.comments}/> */}
        </div>
    </>
  )
}
       
export default ArticlePage