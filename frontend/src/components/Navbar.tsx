import  { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/mylogoo.png'
import AppIcon from '../assets/img/menu.png'
import ngarrow from '../assets/img/ngarrow.png'

const linkBase = 'font-poppins border-b-2 border-transparent hover:border-b-[#E60B14] transition-colors pb-0.5'
const mobileLinkBase = 'block px-4 py-2 text-sm font-poppins border-b-2 border-transparent hover:border-b-[#E60B14] transition-colors'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const mobileRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node
      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false)
      }
      if (mobileRef.current && !mobileRef.current.contains(target)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navClass = (isActive: boolean | undefined) =>
    `${linkBase} ${isActive ? 'text-[#E60B14]' : 'text-black'}`

  const mobileNavClass = (isActive: boolean | undefined) =>
    `${mobileLinkBase} ${isActive ? 'text-[#E60B14]' : 'text-black'}`

  return (
    <section className='w-full bg-[#FFFAF3] font-poppins sticky top-0 z-50'>
      <nav className='md:px-10 w-full mx-auto text-[16.5px] md:py-8.5 px-6 py-5'>
        <div className='flex justify-between items-center'>
          {/* Left Side - Logo + desktop links */}
          <div className='flex items-center md:space-x-8 text-sm'>
           <NavLink to="/"><img src={Logo} alt="Logo" className='md:h-auto md:w-auto h-4.5' /></NavLink>
            {/* desktop links - hidden on small screens */}
            <div className='hidden md:flex md:items-center md:space-x-8 ml-4'>
              <NavLink to="/about" className={({ isActive }) => navClass(isActive)}>About MYCODE</NavLink>
              <NavLink to="/hackerspace" className={({ isActive }) => navClass(isActive)}>Hackerspaces</NavLink>
              <NavLink to="/blog" className={({ isActive }) => navClass(isActive)}>MYCODETECH</NavLink>
            </div>
          </div>

          {/* Right Side - NG + mobile menu button */}
          <div className='flex items-center space-x-4'>
            {/* NG with dropdown (no border on NG, dropdown bg #FFFAF3) */}
            <div className='relative' ref={menuRef}>
              <button
                onClick={() => setOpen(o => !o)}
                className='bg-transparent  font-light px-2 py-1 focus:outline-none'
                aria-expanded={open}
                aria-haspopup="true"
              >
               <div className='flex flex-row items-center gap-1'>
                <span className='mr-1'>NG</span>
                <img src={ngarrow} alt='arrow' className='w-3.5 h-3.5' />
               </div>
              </button>

              {open && (
                <ul className='absolute right-0 mt-2 w-32 bg-[#FFFAF3] rounded-md shadow-md py-1 text-sm z-50'>
                  <li className='px-3 py-2 hover:bg-[#f5efe8]'>
                    <button className='w-full text-left font-poppins'>LG</button>
                  </li>
                  <li className='px-3 py-2 hover:bg-[#f5efe8]'>
                    <button className='w-full text-left font-poppins'>ABJ</button>
                  </li>
                  <li className='px-3 py-2 hover:bg-[#f5efe8]'>
                    <button className='w-full text-left font-poppins'>IBD</button>
                  </li>
                  <li className='px-3 py-2 hover:bg-[#f5efe8]'>
                    <button className='w-full text-left font-poppins'>PH</button>
                  </li>
                </ul>
              )}
            </div>

            {/* Mobile menu button (app.png) - visible on small / tablet, hidden on md+ */}
            <div className='relative' ref={mobileRef}>
              <button
                onClick={() => setMobileOpen(v => !v)}
                className='md:hidden focus:outline-none'
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <img src={AppIcon} alt={mobileOpen ? 'Close menu' : 'Open menu'} className='w-7 h-7' />
              </button>

              {/* Mobile dropdown - contains the main nav links, no border, bg #FFFAF3 */}
              {mobileOpen && (
                <div
                  id="mobile-menu"
                  className='md:hidden absolute right-0 mt-2 w-48 bg-[#FFFAF3] rounded-md shadow-md py-2 z-50'
                >
                  <NavLink
                    to="/"
                    className={({ isActive }) => mobileNavClass(isActive)}
                    onClick={() => setMobileOpen(false)}
                  >
                    MYCODE About
                  </NavLink>
                  <NavLink
                    to="/hackerspace"
                    className={({ isActive }) => mobileNavClass(isActive)}
                    onClick={() => setMobileOpen(false)}
                  >
                    Hackerspaces
                  </NavLink>
                  <NavLink
                    to="/"
                    className={({ isActive }) => mobileNavClass(isActive)}
                    onClick={() => setMobileOpen(false)}
                  >
                    MYCODETECH
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar