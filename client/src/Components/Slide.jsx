import React from 'react'

const Slide = ({ slide }) => {
  return (
    <div className='bg-white rounded-xl p-5 flex flex-col h-[370px] md:h-[350px] w-full'>
      <div className='text-center'>
        <h4 className='text-black font-semibold text-sm md:text-base'>{slide.title}</h4>
        <hr className='mt-3 h-[1px] bg-gray-300 border-none' />
      </div>

      <div className='mt-4 flex flex-col gap-3 flex-1'>
        {slide.details.map((detail, index) => (
          <div key={index} className='flex items-center gap-2 w-full text-xs md:text-sm'>
            <p className='text-black max-w-[60%]'>{detail.description}</p>
            <div className='flex-1 h-[1px] bg-gray-300' />
            <p className='text-gray-500 whitespace-nowrap text-right'>{detail.frequency}</p>
          </div>
        ))}
      </div>

      <div className='mt-4'>
        <hr className='h-[1px] bg-gray-300 border-none mb-2' />
        <p className='text-center font-semibold text-base md:text-lg'>{slide.price} ₽</p>
      </div>
    </div>
  )
}

export default Slide
