import React from 'react'

const ModalItem = ({ program, onClose }) => {
  return (
    <div className='fixed inset-0 z-90 bg-black/80 flex items-center justify-center px-4'>
      <div className='relative bg-white rounded-xl w-full md:w-1/2 p-5 shadow-lg'>
        <button onClick={onClose} className='absolute top-3 right-4 text-black/50 hover:text-black transition cursor-pointer'>
          ✕
        </button>

        <div className='flex flex-col gap-4 mt-6'>
          <div className='flex flex-col gap-3 text-black text-sm md:text-base'>
            <p>{program.description}</p>
            {program.description2 && <p>{program.description2}</p>}
            {program.description3 && <p>{program.description3}</p>}
            {program.description4 && <p>{program.description4}</p>}
            {program.description5 && <p>{program.description5}</p>}
            {program.description6 && <p>{program.description6}</p>}

            <hr className='w-[30%] border-gray-300 mt-2' />
          </div>

          <div className='flex flex-col sm:flex-row sm:justify-between gap-2 text-black text-sm md:text-base mt-2'>
            <p>Длительность: {program.time}</p>
            <p>Цена: {program.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalItem
