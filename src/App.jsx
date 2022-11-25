
import './App.css'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import Layout from './components/Layout'
import ArticleListPage from './pages/ArticleListPage'
import NotFoundPage from './pages/NotFoundPage'
function App() {
 

  return (
   <BrowserRouter>
   <Layout>
   <Routes>
    <Route path='/'element={<HomePage/>}/>
    <Route path='/about'element={<AboutPage/>}/>
    <Route path='/articles'element={<ArticleListPage/>}/>
    <Route path='/articles/:articleId'element={<ArticlePage/>}/>
    <Route path='*'element={<NotFoundPage/>}/>
    
   </Routes>

   </Layout>
   
   </BrowserRouter>
  )
}

export default App
