import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-[url('/spa.jpeg')] bg-cover bg-center flex">
      <div className='w-full flex justify-between items-start mt-22 md:mt-44'>
        <div className='text-white'>
          <h1 className='text-xl md:text-3xl mb-3 px-5 md:px-40 font-semibold'>
            Enjoy the experience, <br />
            relax with a massage
          </h1>

          <hr className='w-[150px] md:w-[500px] border-yellow-600 md:mb-3 border-1' />

          <p className='text-white/60 text-sm md:text-base px-5 md:px-40'>We target all problem areas for a complete relaxation</p>
        </div>

        <div className='text-white flex flex-col gap-2 text-sm md:text-lg text-right px-5 md:px-20'>
          <p>Natural oils and cosmetics</p>
          <p>Themed music</p>
        </div>
      </div>
    </div>
  )
}

export default About
