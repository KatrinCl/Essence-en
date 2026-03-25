import React from 'react'

const Certificates = () => {
  return (
    <div id='certificates' className='w-full min-h-screen bg-cover bg-center bg-no-repeat flex md:items-center' style={{ backgroundImage: "url('/cert.jpg')" }}>
      <div className='w-full pt-24 md:pt-2 flex flex-col gap-6'>
        <h1 className='text-white/90 text-xl sm:text-2xl md:text-3xl font-semibold pl-10 md:pl-50'>
          GIFT <br /> CERTIFICATE
        </h1>

        <hr className='border-yellow-600 w-full md:w-[470px] border-1' />

        <p className='text-white/60 text-sm sm:text-base pl-10 md:pl-50'>
          Give more than an envelope – give <br /> an immersion into a world of relaxation...
        </p>

        <div className='pl-10 md:pl-50'>
          <button className='w-[200px] sm:w-[240px] py-2 border border-yellow-600 rounded-full text-yellow-500 font-semibold hover:text-yellow-400 hover:border-yellow-400 transition cursor-pointer'>Order a Certificate</button>
        </div>
      </div>
    </div>
  )
}

export default Certificates
