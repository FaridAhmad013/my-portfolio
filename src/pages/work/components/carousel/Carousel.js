import React, { useRef, useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../../../context/Index";
import { datas } from "../../../../data/CarouselData";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const { 
    setDetailImage,
    setDataImage
   } = useContext(MyContext)

   const detailProjekHandler = ({images, title, description}) => {
    setDetailImage(true)
    setDataImage({images,title,description})
  }

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const moveNext = () => {
    if (currentIndex < datas.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const disabled = (direction) => {
    if (direction === "prev") {
      return currentIndex === 0 ? true : false;
    } else if (direction === "next") {
      return currentIndex >= datas.length ? true : false;
    }
  };


  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);
  return (
    <>
      <div className="relative overflow-hidden rounded-xl">
        {/* Button */}
        <div className="absolute flex justify-between w-full h-full">
          <button
            onClick={movePrev}
            className="z-10 w-10 h-full p-0 m-0 text-center text-indigo-700 transition-all duration-300 ease-in-out opacity-75 hover:text-white hover:bg-blue-900/75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed"
            disabled={disabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-12 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="z-10 w-10 h-full p-0 m-0 text-center text-indigo-600 transition-all duration-300 ease-in-out opacity-75 hover:text-white hover:bg-blue-900/75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed"
            disabled={disabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-12 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>

        <div
          ref={carousel}
          className="relative flex gap-1 overflow-auto scroll-smooth snap-x touch-pan-x snap-mandatory"
        >
          {datas.map((data, key) => {
            return (
              <figure
                key={key}
                className="relative w-full text-center lg:h-96 md:h-96 h-[50vh] carousel-item snap-start"
                onClick={() => detailProjekHandler({...data})}
              >
                <div className="z-0 block w-full h-full bg-left-top bg-no-repeat bg-cover aspect-video bg-origin-padding">
                  <img
                    src={data.image}
                    className="object-cover w-full h-full"
                    alt={data.title}
                  />

                  <div className="absolute inset-x-0 bottom-0">
                    <div className="flex justify-center py-2 space-x-4">
                      {/* Button Detail Image */}

                      <button
                        className="text-indigo-600 duration-300 hover:scale-y-150"
                        title="Lihat Detail Projek"
                        onClick={() => detailProjekHandler({...data})}
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>                      </button>

  
                    </div>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
