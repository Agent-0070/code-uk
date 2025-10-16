import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/about'
import ScrollToTop from './components/ScrollToTop'
import Hackerspace from './pages/hackerspace'
import Blog from './pages/blog'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hackerspace" element={<Hackerspace />} />
        <Route path="/tech" element={<Blog />} />
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default App