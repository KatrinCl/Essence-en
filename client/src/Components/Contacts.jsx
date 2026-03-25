import React from 'react'
import Footer from './Footer'

const Contacts = () => {
  return (
    <div id='contacts' className='w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center' style={{ backgroundImage: "linear-gradient(rgba(72,44,45,0.5), rgba(187,172,173,0)), url('/ground.jpg')" }}>
      <div className='flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20 pt-20 md:pt-48'>
        <div className='flex flex-col gap-6 text-white/90 max-w-md w-full'>
          <h2 className='text-xl md:text-2xl font-semibold px-4 md:px-40 whitespace-nowrap'>WE ARE WAITING FOR YOU!</h2>

          <hr className='border-yellow-600 border-1 w-full md:w-[390px]' />

          <div className='flex flex-col gap-6 text-white/70 text-sm sm:text-base px-4 md:px-40 whitespace-nowrap'>
            <div className='flex flex-col gap-1'>
              <h3 className='flex items-center gap-2'>
                <img src='./call.svg' alt='' className='w-4 h-4' />
                +1-212-555-1234
              </h3>
              <p>Every day 10:00 AM – 10:00 PM</p>
            </div>

            <div>
              <h4 className='flex items-center gap-2'>
                <img src='./location.svg' alt='' className='w-4 h-4' />
                123 Wellness Ave, New York, NY 10001, USA
              </h4>
            </div>

            <div>
              <h4 className='flex items-center gap-2'>
                <img src='./envelope.svg' alt='' className='w-4 h-4' />
                info@essencespa.com
              </h4>
            </div>
          </div>
        </div>

        <div className='px-4 md:px-40'>
          <iframe className='w-full md:w-[400px] h-[200px] sm:h-[300px] md:h-[250px] rounded-xl' src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=123%20Wellness%20Ave,%20New%20York,%20NY%2010001+(Essence)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed' loading='lazy' />
        </div>
      </div>

      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default Contacts
