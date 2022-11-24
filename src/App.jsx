
import './App.css'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticleList from './pages/ArticleList'
function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<HomePage/>}/>
    <Route path='/about'element={<AboutPage/>}/>
    <Route path='/article:articleId'element={<ArticlePage/>}/>
    <Route path='/articles'element={<ArticleList/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
