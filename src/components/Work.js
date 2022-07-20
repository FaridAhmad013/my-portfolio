import React, { useEffect } from 'react'
import Carousel from './carousel/Carousel'
import 'aos/dist/aos.css'
import Aos from 'aos'
import DetailImage from './carousel/DetailImage'

const Work = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);
    
  return (
    <>        
    <div className='flex items-center min-h-screen' id='portfolio' data-aos="flip-up">
        <div className="container">
            <div className="flex flex-wrap">

            <header className='w-full lg:w-5/12'>
            <h1>Projek Yang Pernah Dikerjakan</h1>
            <p>
                Berikut merupakan kumpulan projek yang pernah saya kerjakan selama menjadi freelance
            </p>
            <a href={"#contact"}>                
            <button className='my-4 btn btn-primary lg:my-0'>
                Hire Me
            </button>
            </a>
            </header>
            <section className='w-full px-4 select-none lg:w-7/12'>

                <Carousel/>

            </section>

            </div>
        </div>
    </div>

    <DetailImage/>
    </>
  )
}

export default Work