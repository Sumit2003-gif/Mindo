import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import SingleBlog from './Components/SingleBlog'
import ScrollToTop from './Components/ScrolltoTop'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{overflow:'hidden'}}>
      {/* Hello */}
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/blogs/:id' element={<SingleBlog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
