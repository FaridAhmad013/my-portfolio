import React, { useRef, useState, useEffect } from "react";
import { datas } from "./CarouselData";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const carousel = useRef(null);
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

  const detail = (e) => {
    setShowDetail(!showDetail);
    console.log(e);
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);
  return (
    <div>
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
                className="relative w-full h-[70vh] text-center lg:h-96 carousel-item snap-start"
              >
                <div className="z-0 block w-full h-full bg-left-top bg-no-repeat bg-cover aspect-video bg-origin-padding">
                  <img
                    src={data.image}
                    className="object-cover w-full h-full"
                    alt={data.title}
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 duration-700 ${
                      showDetail === false && "translate-y-2/3"
                    }`}
                  >
                    <button onClick={detail} title="Show Detail">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-indigo-600 duration-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        {showDetail ? (
                          <path
                            fillRule="evenodd"
                            d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        ) : (
                          <path
                            fillRule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        )}
                      </svg>
                    </button>
                    <div className={`bg-indigo-400 rounded-lg text-indigo-50 `}>
                      <h3 className="text-indigo-50">{data.title}</h3>
                      <div className="text-sm lg:text-base"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                      />
                    </div>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
