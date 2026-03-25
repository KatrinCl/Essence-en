import React, { useState, useEffect } from 'react'
import { master_list } from '../../public/assets'
import ExploreMasters from './ExploreMasters'

const Masters = () => {
  const [master, setMaster] = useState(() => {
    const saved = localStorage.getItem('selectedMaster')

    const exists = master_list.some(item => item.name === saved)

    return exists ? saved : 'Master Nari'
  })

  useEffect(() => {
    localStorage.setItem('selectedMaster', master)
  }, [master])

  const current = master_list.find(item => item.name === master)

  return (
    <div
      id='masters'
      className='w-full flex items-center min-h-screen bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: "linear-gradient(rgba(72,44,45,0.5), rgba(187,172,173,0)), url('/brown.jpg')",
      }}>
      <div className='flex flex-col pt-20 md:pt-40'>
        <div className='flex flex-col gap-3 items-center text-center md:items-start md:text-left'>
          <h2 className='text-white text-2xl md:text-3xl font-semibold md:px-50'>OUR MASTERS</h2>
          <p className='text-white/60 md:px-50'>
            All procedures are performed only by <br />
            certified masters from <br />
            Thailand
          </p>
          <hr className='w-[250px] md:w-[550px] border border-yellow-600' />
        </div>

        {current && (
          <div className='flex flex-col md:flex-row gap-10 md:items-start md:justify-between mt-2'>
            <div className='flex flex-col gap-2 text-center md:text-left'>
              <p className='text-yellow-500 text-xl md:text-2xl font-medium md:px-50 whitespace-nowrap'>{current.name}</p>
              <p className='text-white text-sm md:text-base px-4 md:px-50'>{current.description}</p>
            </div>

            <div className='flex justify-center md:justify-end w-full md:px-40 -mt-8 md:-mt-32'>
              <div className='w-[200px] md:w-[250px] h-[300px] md:h-[350px]'>
                <img src={current.image} alt={current.name} className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
        )}

        <ExploreMasters master={master} setMaster={setMaster} />
      </div>
    </div>
  )
}

export default Masters
