import React from 'react'
import { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
   
    const navigate=useNavigate()
   const login=async()=>{
    try{
     
        await signInWithEmailAndPassword(getAuth(),email,password)
        navigate('/articles')
    }catch(err){
        setError(err.message)
    }
   }

  return (
    <>
    <h1>Log in</h1>
    {error && <p className='error'>{error}</p>}
    <input 
    onChange={e=>setEmail(e.target.value)}
    value={email}
    type="email"
    placeholder='email'/>
    <input 
    value={password}
    onChange={e=>setPassword(e.target.value)}
    type="password"placeholder='password'/>
    <button onClick={login}>login</button>
    <Link to="/register">Don't have an account ? Create One</Link>
    </>
  )
}

export default Login