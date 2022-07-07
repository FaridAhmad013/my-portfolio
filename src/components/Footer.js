import Github from '@iconscout/react-unicons/icons/uil-github'
import Gitlab from '@iconscout/react-unicons/icons/uil-gitlab'
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp-alt'
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='h-full py-10 bg-gradient-to-r from-indigo-500 to-indigo-600'>
            <div className="flex items-center justify-center">
            <div>
                <h2 className='text-indigo-50'>
                    Farid Ahmad Fadhilah
                </h2>
                <div className='flex mt-10 justify-evenly'>
                <a href="https://github.com/FaridAhmad013">
                <Github className='w-10 h-10 lg:w-14 lg:h-14 text-indigo-50'  />
                </a>
                <a href="https://gitlab.com/FaridAhmadFadhilah">
                <Gitlab className='w-10 h-10 lg:w-14 lg:h-14 text-indigo-50' />
                </a>
                <a href="https://wa.me/+6282117227065">
                <Whatsapp className='w-10 h-10 lg:w-14 lg:h-14 text-indigo-50' />
                </a>
                </div>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Footer