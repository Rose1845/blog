import axios from 'axios'
import React ,{useState} from 'react'

const AddCommentForm = ({articleName,onArticleUpdated}) => {
    const [name,setName]=useState('')
    const [commentText,setCommentText]=useState('')

     const addComment=async()=>{
        const response = await axios.post(`http://localhost:8000/api/articles/${articleName}/comments`,{
            postedBy:name,
            text:commentText
        })
        const updatedArticle=response.data
        onArticleUpdated(updatedArticle)
        setName('')
        setCommentText('')
     }

  return (
    <div style={{display:"flex",flexDirection:'column'}}id='add-comment'>
        <h3>Add Comment</h3>
        <label htmlFor="name">Name:
        <input 
        value={name}
        onChange={e=>setName(e.target.value)}
        type="text" />
        </label>
        <label htmlFor="comment">Comment:
        <textarea 
         style={{display:'flex',alignItems:'center'}}
        value={commentText}
        onChange={e=>setCommentText(e.target.value)}
        name="coo" id="" cols="50" rows="4"></textarea>
        </label>
        <button onClick={addComment}>Add Comment</button>

    </div>
  )
}

export default AddCommentForm