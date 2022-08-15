import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Show from "./components/Show";
import Project from "./components/Project";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="flex min-h-screen" id="portfolio" data-aos="flip-up">
        <div className="container">
          <header className="w-full text-center">
            <h1>Projek Yang Pernah Dikerjakan</h1>
            <p>
              Berikut merupakan kumpulan projek yang pernah saya kerjakan selama
              menjadi freelance
            </p>
            {/* <a href={"#contact"}>                
            <button className='my-4 btn btn-primary lg:my-0'>
                Hire Me
            </button>
            </a> */}
          </header>

          <hr className="my-5" />

          <Project />
        </div>
      </div>

      <Show />
    </>
  );
};

export default Work;
