import React, { useState } from 'react'
import ModalItem from './ModalItem'
import { spa_list } from '../../public/assets'

const Programs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState(null)

  const openModal = program => {
    setSelectedProgram(program)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProgram(null)
  }

  return (
    <div id='programs' className="w-full min-h-screen text-white bg-[linear-gradient(rgba(72,44,45,0.5),rgba(187,172,173,0)),url('/ground.jpg')] bg-cover bg-center flex flex-col justify-center md:pt-24 px-4 md:px-0">
      <div className='mb-8 md:mb-10'>
        <h1 className='text-2xl md:text-3xl mb-2 md:pl-60 font-semibold'>SPA-Programs</h1>

        <hr className='w-full md:w-[550px] border-1 border-yellow-600' />
      </div>

      <div className='md:w-[650px] w-full md:pl-60'>
        <ul className='w-full flex flex-col gap-3'>
          {spa_list.map((program, index) => (
            <li key={index} className='relative w-full h-[50px] md:h-[40px] border border-white flex items-center px-3 font-semibold cursor-pointer hover:text-yellow-500 transition'>
              {program.name}
              <img onClick={() => openModal(program)} src='./circle_plus.svg' alt='' className='w-5 absolute right-3 cursor-pointer' />
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && <ModalItem program={selectedProgram} onClose={closeModal} />}
    </div>
  )
}

export default Programs
