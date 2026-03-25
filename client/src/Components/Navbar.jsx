import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import OrderCall from './OrderCall'

const Navbar = () => {
  const [isOrderCallOpen, setIsOrderCallOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleOrderCall = () => setIsOrderCallOpen(!isOrderCallOpen)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 400
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className='fixed z-50 w-full transition-all duration-300'>
      <div className='flex items-center justify-between mx-4 sm:mx-10 my-2 md:mx-40 md:my-4'>
        <div className='flex items-center gap-2'>
          <img src='./logo.png' alt='logo' className='w-12 sm:w-16 md:w-20' />

          <div className='hidden sm:flex flex-col justify-center items-center'>
            <h1 className='text-white font-semibold text-lg md:text-3xl'>Essence</h1>
            <p className='text-white/60 text-xs sm:text-base'>beauty & spa</p>
          </div>
        </div>

        <div className='flex items-center gap-2 sm:gap-3'>
          <button onClick={toggleOrderCall} className='hidden md:block px-4 py-2 md:px-5 md:py-3 text-base md:text-lg border border-yellow-600 rounded-full text-yellow-500 hover:text-yellow-400 hover:border-yellow-400 transition cursor-pointer'>
            Order a Call
          </button>

          <button onClick={toggleOrderCall} className='md:hidden p-2 border border-yellow-600 rounded-full'>
            <img src='./call.svg' alt='call' className='w-4 h-4 sm:w-5 sm:h-5' />
          </button>

          <button onClick={toggleMenu} className='md:hidden p-2'>
            <img src='./menu.svg' alt='menu' className='w-6 sm:w-8' />
          </button>
        </div>
      </div>

      <hr className='mx-4 sm:mx-10 md:mx-40 border-white/20 hidden md:block' />

      <div className={`fixed md:static top-[70px] right-0 w-[250px] md:w-full h-[calc(100vh-70px)] md:h-auto bg-black/30 md:bg-transparent backdrop-blur-md md:backdrop-blur-none transition-all duration-300 z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
        <ul className='flex flex-col md:flex-row md:justify-around items-center w-full md:w-[80%] mx-auto'>
          <li className='w-full text-center my-2 md:my-5'>
            <Link to='hero' smooth duration={500} onClick={closeMenu} className='block py-3 md:py-0 text-white/60 hover:text-yellow-500 cursor-pointer transition text-base'>
              HOME
            </Link>
          </li>

          <li className='w-full text-center my-2 md:my-5'>
            <Link to='programs' smooth duration={500} onClick={closeMenu} className='block py-3 md:py-0 text-white/60 hover:text-yellow-500 cursor-pointer transition text-base'>
              SPA PROGRAMS
            </Link>
          </li>

          <li className='w-full text-center my-2 md:my-5'>
            <Link to='massage' smooth duration={500} onClick={closeMenu} className='block py-3 md:py-0 text-white/60 hover:text-yellow-500 cursor-pointer transition text-base'>
              THAI MASSAGE
            </Link>
          </li>

          <li className='w-full text-center my-2 md:my-5'>
            <Link to='certificates' smooth duration={500} onClick={closeMenu} className='block py-3 md:py-0 text-white/60 hover:text-yellow-500 cursor-pointer transition text-base'>
              CERTIFICATES
            </Link>
          </li>

          <li className='w-full text-center my-2 md:my-5'>
            <Link to='abonements' smooth duration={500} onClick={closeMenu} className='block py-3 md:py-0 text-white/60 hover:text-yellow-500 cursor-pointer transition text-base'>
              COURSES
            </Link>
          </li>

          <li className='w-full text-center my-2 md:my-5'>
            <Link to='masters' smooth duration={500} onClick={closeMenu} className='block py-3 md:py-0 text-white/60 hover:text-yellow-500 cursor-pointer transition text-base'>
              MASTERS
            </Link>
          </li>

          <li className='w-full text-center my-2 md:my-5'>
            <Link to='contacts' smooth duration={500} onClick={closeMenu} className='block py-3 md:py-0 text-white/60 hover:text-yellow-500 cursor-pointer transition text-base'>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {isOrderCallOpen && <OrderCall onClose={toggleOrderCall} />}
    </nav>
  )
}

export default Navbar
