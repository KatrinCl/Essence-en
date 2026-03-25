import React from 'react'

const OrderCall = ({ onClose }) => {
  const [result, setResult] = React.useState('')

  const onSubmit = async event => {
    event.preventDefault()
    setResult('Sending...')

    const formData = new FormData(event.target)
    formData.append('access_key', '27f49f85-61b3-40a9-ab8d-82ab671ba860')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Successfully sent ✓')
      event.target.reset()
    } else {
      setResult('Error sending form')
    }
  }

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4'>
      <form onSubmit={onSubmit} className='relative bg-white w-full max-w-md rounded-xl p-6 md:p-8 flex flex-col gap-4'>
        <button type='button' onClick={onClose} className='absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer'>
          ✕
        </button>

        <h2 className='text-yellow-600 text-xl md:text-2xl font-semibold text-center'>Order a Call</h2>

        <input type='text' name='name' placeholder='Your Name' required className='w-full p-3 border rounded-md outline-none focus:border-yellow-500' />
        <input type='tel' name='phone' placeholder='Your Phone' required className='w-full p-3 border rounded-md outline-none focus:border-yellow-500' />
        <input type='email' name='email' placeholder='Email' required className='w-full p-3 border rounded-md outline-none focus:border-yellow-500' />
        <textarea name='message' rows='4' placeholder='Here you can ask us your questions' required className='w-full p-3 border rounded-md outline-none focus:border-yellow-500 resize-none' />

        {result && <p className='text-sm text-gray-600 text-center'>{result}</p>}

        <button type='submit' className='mt-2 py-3 rounded-full bg-yellow-600 text-white font-medium hover:bg-yellow-500 transition cursor-pointer'>
          Send
        </button>
      </form>
    </div>
  )
}

export default OrderCall
