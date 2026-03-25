import React, { useRef, useState, useEffect } from 'react'
import Slide from './Slide'
import { slidesData } from '../../public/assets'

const Abonements = () => {
  const slider = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3)
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(1)
      }
    }

    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)

    return () => window.removeEventListener('resize', updateSlidesToShow)
  }, [])

  useEffect(() => {
    setCurrentIndex(0)
  }, [slidesToShow])

  const slideForward = () => {
    const maxIndex = slidesData.length - slidesToShow
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const slideBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const translateX = -(currentIndex * (100 / slidesToShow))

  return (
    <div id='abonements' className='w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-4' style={{ backgroundImage: "linear-gradient(rgba(72,44,45,0.5), rgba(187,172,173,0)), url('/ground.jpg')" }}>
      <div className='w-full flex flex-col gap-6 md:pt-40 items-center'>
        <h2 className='text-white text-xl md:text-2xl font-semibold text-center'>MASSAGE COURSES</h2>

        <div className='relative w-full max-w-6xl mx-auto px-12'>
          <div className='overflow-hidden w-full'>
            <ul ref={slider} className='flex transition-transform duration-500 ease-in-out' style={{ transform: `translateX(${translateX}%)` }}>
              {slidesData.map((slide, index) => (
                <li key={index} className='flex-shrink-0 px-3' style={{ width: `${100 / slidesToShow}%` }}>
                  <Slide slide={slide} />
                </li>
              ))}
            </ul>
          </div>

          <button onClick={slideBackward} className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 cursor-pointer hover:opacity-100'}`} disabled={currentIndex === 0} style={{ left: '0' }}>
            <img src='./back.svg' className='w-6 md:w-8' alt='back' />
          </button>

          <button onClick={slideForward} className={`absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full transition-all ${currentIndex >= slidesData.length - slidesToShow ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100'}`} disabled={currentIndex >= slidesData.length - slidesToShow} style={{ right: '0' }}>
            <img src='./back.svg' className='w-6 md:w-8 rotate-180' alt='forward' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Abonements
