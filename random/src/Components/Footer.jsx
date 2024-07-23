import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-9 h-24 text-xs uppercase font-Poppins'>
        <div className='flex justify-between'>
            <div className='flex text-zinc-600 font-semibold'>
                <p className='mr-4 cursor-pointer'>Cookies reference</p>
                <p className='cursor-pointer'>Imprint</p>
            </div>

            <div className='text-gray-400 font-semibold'>
                <p className='cursor-pointer '>ALL IMAGES © Google Chrome</p>
            </div>
        </div>
    </div>
  )
}

export default Footer