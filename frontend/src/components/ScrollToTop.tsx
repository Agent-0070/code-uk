import { useEffect, useState } from 'react'
import ArrowUp from '../assets/img/arrowtoup.png'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className="fixed right-5 bottom-5 md:right-8 md:bottom-8 z-50 bg-[#2d6cea] rounded-full w-15 h-15 flex items-center justify-center shadow-lg focus:outline-none"
    >
      <img src={ArrowUp} alt="arrow to top" className="w-6 h-6 invert" />
    </button>
  )
}

export default ScrollToTop
