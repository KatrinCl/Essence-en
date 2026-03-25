import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='hero' className="w-full min-h-screen flex items-center justify-center bg-[linear-gradient(rgba(187,172,173,0),rgba(72,44,45,0.5)),url('/hero.jpeg')] bg-cover bg-center">
      <div className='flex flex-col items-center gap-8 w-full px-4'>
        <div className='flex flex-col items-center text-center text-white mt-10'>
          <h1 className='text-2xl md:text-3xl font-semibold'>SPA SALON</h1>
          <p className='w-[80%] text-sm md:text-base mt-3'>Professional care for your body</p>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-4 mt-14'>
          <button className='w-[240px] h-[40px] border border-yellow-600 rounded-full text-yellow-500 font-semibold hover:text-yellow-300 hover:border-yellow-300 transition cursor-pointer'>
            <Link to='programs' smooth duration={500}>
              Choose a SPA Program
            </Link>
          </button>

          <button className='w-[240px] h-[40px] border border-yellow-600 rounded-full text-yellow-500 font-semibold hover:text-yellow-300 hover:border-yellow-300 transition cursor-pointer'>
            <Link to='massage' smooth duration={500}>
              Choose a Massage
            </Link>
          </button>

          <button className='w-[240px] h-[40px] border border-yellow-600 rounded-full text-yellow-500 font-semibold hover:text-yellow-300 hover:border-yellow-300 transition cursor-pointer'>
            <Link to='abonements' smooth duration={500}>
              View Courses
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
