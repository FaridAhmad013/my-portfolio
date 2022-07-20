import React, { useEffect } from 'react'
import Glasess from '../assets/img/glasses.png'
import Resume from '../assets/pdf/Farid Ahmad Fadhilah - CV.pdf'
import 'aos/dist/aos.css';
import Aos from 'aos';

const Services = () => {
  useEffect(() => {
  Aos.init({
    duration: 2000
  })
  }, []);
  return (
    <div className='flex items-center min-h-screen' id='layanan' data-aos="fade-right">
    <div className="container">

    <div className="flex flex-wrap justify-center">

        <header className='w-full lg:w-1/2 md:w-1/2'>
        <h1>Layanan</h1>
        <p className='leading-relaxed'>Berikut Layanan - layanan yang bisa saya berikan.</p>
        <a href={Resume} download>
          <button className='my-6 lg:my-10 btn btn-primary'>Download CV</button>
        </a>
        </header>

        <section className='w-full lg:w-1/2 md:w-1/2'>
        <div className="flex justify-center select-none">

        <div className="w-full max-w-xs">
            <div className="px-2 py-3 duration-300 transform rounded-lg shadow bg-slate-100 lg:px-4 lg:py-5 ring-8 hover:translate-y-3" data-aos="flip-right">
                <div className='flex justify-center'>
                    <img src={Glasess} alt="Cool" className='w-24 lg:w-28' />
                </div>
                <h2 className='text-center'>Developer</h2>
                <p className='text-sm leading-relaxed text-center text-gray-700 lg:text-base'>
                    HTML5, CSS3, Javascript, Tailwind CSS, React JS, Vue JS, PHP, Laravel 
                </p>
            </div>
        </div>

        </div>
        </section>
        
    </div>
    
    </div>
    </div>
  )
}

export default Services