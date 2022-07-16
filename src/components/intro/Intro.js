import React from "react";
import Github from "@iconscout/react-unicons/icons/uil-github"
import Gitlab from "@iconscout/react-unicons/icons/uil-gitlab"
import TextIntro from "./TextIntro";
import ImageIntro from "./ImageIntro";

const Intro = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center min-h-screen" id="home">
        <section className="flex flex-wrap justify-center lg:justify-evenly">
          <header className="relative self-center w-full leading-relaxed lg:w-1/2 md:w-1/2">
           <TextIntro/>

            <div className="flex items-center my-6 lg:my-12 justify-evenly">
              {/* Github */}
              <a href="https://github.com/FaridAhmad013" title="Lihat Github">
              <Github className='w-12 h-12 text-indigo-400 lg:w-20 lg:h-20' />
              </a>
              {/* Gitlab */}
              <a href="https://gitlab.com/FaridAhmadFadhilah" title="Lihat Gitlab">
              <Gitlab className='w-12 h-12 text-indigo-400 lg:w-20 lg:h-20' />
              </a>
            </div>
          </header>

          <figure className="relative self-center w-full my-6 lg:my-0 lg:w-1/2 md:w-1/2">
            <ImageIntro/>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default Intro;
