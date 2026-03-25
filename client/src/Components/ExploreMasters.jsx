import React from 'react'
import { master_list } from '../../public/assets'

const ExploreMasters = ({ master, setMaster }) => {
  return (
    <div className='w-full flex flex-col items-center mt-2 md:mt-6'>
      <hr className='hidden md:block w-[80%] border-t border-white/30 mb-4' />

      <div className='flex flex-wrap justify-center mb-6 md:mb-0 items-center gap-6 md:gap-36 text-center'>
        {master_list.map((item, index) => (
          <div
            key={index}
            className='cursor-pointer'
            onClick={() => {
              setMaster(item.name)
              localStorage.setItem('selectedMaster', item.name)
            }}>
            <p className={`mt-4 text-lg md:text-2xl whitespace-nowrap ${master === item.name ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-white/60'}`}>{item.name}</p>
          </div>
        ))}
      </div>

      <hr className='hidden md:block w-[80%] border-t border-white/30 mt-6' />
    </div>
  )
}

export default ExploreMasters
