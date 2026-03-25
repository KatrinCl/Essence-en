import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='w-full pt-4'>
      <hr className='w-[90%] md:w-[80%] h-[1px] bg-white/20 mx-auto border-none' />
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mx-10 my-2 md:mx-40 md:my-4 gap-8'>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-3'>
            <img src='./logo.png' alt='logo' className='w-16 md:w-24 opacity-80' />
            <div className='flex flex-col'>
              <h1 className='text-white text-xl md:text-3xl font-semibold'>Essence</h1>
              <p className='text-white/60 text-sm'>beauty & spa</p>
            </div>
          </div>

          <p className='text-white/50 text-xs md:text-sm max-w-[250px] hidden md:block'>Copyright 2024 © Essence.com — All Rights Reserved.</p>
        </div>

        <div className='w-full md:w-auto'>
          <ul className='flex flex-wrap md:flex-col gap-4 md:gap-2 text-white/70 text-sm md:text-base'>
            <li>
              <Link to='programs' smooth duration={500} className='cursor-pointer hover:text-yellow-500 transition'>
                SPA Programs
              </Link>
            </li>
            <li>
              <Link to='massage' smooth duration={500} className='cursor-pointer hover:text-yellow-500 transition'>
                Thai Massage
              </Link>
            </li>
            <li>
              <Link to='certificates' smooth duration={500} className='cursor-pointer hover:text-yellow-500 transition'>
                Certificates
              </Link>
            </li>
            <li>
              <Link to='abonements' smooth duration={500} className='cursor-pointer hover:text-yellow-500 transition'>
                Courses
              </Link>
            </li>
            <li>
              <Link to='masters' smooth duration={500} className='cursor-pointer hover:text-yellow-500 transition'>
                Masters
              </Link>
            </li>
            <li>
              <Link to='contacts' smooth duration={500} className='cursor-pointer hover:text-yellow-500 transition'>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <p className='text-white/50 text-xs md:text-sm max-w-[250px] md:hidden block'>Copyright 2024 © Essence.com — All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
