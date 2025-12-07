import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/about'
import ScrollToTop from './components/ScrollToTop'
import Hackerspace from './pages/hackerspace'
import Blog from './pages/blog'
import Fullstack from './pages/fullstack'
import Python from './pages/python'
import Cybersecurity from './pages/cybersecurity'
import Data from './pages/data'
import Social from './pages/social'
import Digital from './pages/digital'
import Design from './pages/design'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hackerspace" element={<Hackerspace />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/python" element={<Python />} />
        <Route path="/data" element={<Data />} />
        <Route path="/social" element={<Social />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/design" element={<Design />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App