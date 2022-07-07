import React from "react";
import Person from "../../assets/img/Mask group.png";
import Crown from "../../assets/img/crown.png";
import GlasesImoji from "../../assets/img/glassesimoji.png";
import Github from "@iconscout/react-unicons/icons/uil-github"
import Gitlab from "@iconscout/react-unicons/icons/uil-gitlab"
import TextIntro from "./TextIntro";

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
            <div className="container overflow-hidden">
              <img
                alt="Farid Ahmad Fadhilah"
                src={Person}
                className="object-cover w-full h-full"
              ></img>
            </div>

          {/* Web Developer */}
            <div className="absolute lg:top-[5%] bottom-0 right-0">
              <div className="relative px-3 py-2 duration-300 bg-white rounded-lg shadow-lg lg:py-4 lg:px-6 hover:-translate-y-3 animation-layouting">
                <div className="flex items-center justify-between">
                  <div className="mr-6">
                    <img src={Crown} alt="Piala"  className="h-12 lg:h-14" />
                  </div>
                  <div className="text-xs font-semibold text-gray-700 lg:text-lg">
                    <span className="block leading-none">Web</span>
                    <span>Developer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0">
              <img src={GlasesImoji} alt="" className="h-24 lg:h-32 lg:w-32 animation-emoticon" />
            </div>

            <div className="absolute bottom-0 w-full -mb-6 -z-10 h-max">
              <svg
                viewBox="0 0 226 146"
                className="w-full h-full text-indigo-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.0893078 55.2255C3.55856 70.3034 9.87557 84.5294 18.6797 97.0913C27.4837 109.653 38.6025 120.305 51.4011 128.439C64.1996 136.572 78.4274 142.028 93.272 144.495C108.117 146.962 123.287 146.392 137.918 142.816C152.549 139.241 166.353 132.731 178.542 123.658C190.731 114.584 201.067 103.126 208.96 89.936C216.852 76.7462 222.146 62.0836 224.54 46.7852C226.934 31.4868 226.38 15.8524 222.911 0.774513L111.5 28L0.0893078 55.2255Z" />
              </svg>
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default Intro;
