import React, { useState, useEffect } from 'react'
import { price_list } from './../../public/assets'
import ExploreMassage from './ExploreMassage'

const Massage = () => {
  const [massage, setMassage] = useState(() => {
    const saved = localStorage.getItem('selectedMassage')

    const exists = price_list.some(item => item.name === saved)

    return exists ? saved : 'Traditional Massage'
  })

  useEffect(() => {
    localStorage.setItem('selectedMassage', massage)
  }, [massage])

  const current = price_list.find(item => item.name === massage) || price_list[0]

  return (
    <div
      id='massage'
      className='w-full flex items-center min-h-screen bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: "linear-gradient(rgba(72,44,45,0.5), rgba(187,172,173,0)), url('/ground.jpg')",
      }}>
      <div className='flex flex-col pt-20 md:pt-36'>
        <div className='flex flex-col gap-3 items-center text-center md:items-start md:text-left'>
          <h2 className='text-white text-2xl md:text-3xl font-semibold md:px-50'>THAI MASSAGE</h2>
          <p className='text-white/60 md:px-50'>
            From certified masters from <br /> Thailand
          </p>
          <hr className='w-[250px] md:w-[550px] border-1 border-yellow-600' />
        </div>

        {current && (
          <div className='flex flex-col md:flex-row md:items-start md:justify-between mt-2'>
            <div className='flex flex-col gap-2 text-center md:text-left md:self-start'>
              <p className='text-yellow-500 text-xl md:text-2xl font-medium md:px-50 whitespace-nowrap'>{current.name}</p>
              <p className='text-white text-base md:text-lg md:px-50 whitespace-nowrap'>{current.price}</p>
            </div>

            <div className='flex justify-center md:justify-end w-full md:px-40 -mt-8 md:-mt-32'>
              <div className='w-[280px] md:w-[470px] h-[250px] md:h-[320px]'>
                <img src={current.image} alt={current.name} className='w-full h-full object-contain' />
              </div>
            </div>
          </div>
        )}

        <ExploreMassage massage={massage} setMassage={setMassage} />
      </div>
    </div>
  )
}

export default Massage
