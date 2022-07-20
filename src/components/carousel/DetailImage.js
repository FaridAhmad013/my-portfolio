import React, { useContext, useState } from "react";
import { MyContext } from "../../context/Index";

const DetailImage = () => {
  const [animation, setAnimation] = useState(false);
  const [selectImage, setSelectImage] = useState(0);
  const { dataImage, detailImage, setDetailImage } = useContext(MyContext);

  return (
    <>
      {detailImage && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 z-[99999]">
          <div className="flex items-end justify-center h-full">
            <div
              className={`w-full max-w-full px-4 py-2 bg-white rounded-xl h-[95vh] animation-open-modal relative overflow-y-auto ${
                animation && "animation-close-modal"
              }`}
            >
              {/* Header */}

              <header className="py-3">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold tracking-wide text-indigo-600">
                    {dataImage.title}
                  </div>
                  <div>
                    <button
                      className="duration-300 hover:scale-95"
                      onClick={() => {
                        setAnimation(true);
                        setTimeout(() => {
                          setDetailImage(false);
                          setAnimation(false);
                        setSelectImage(0)
                        }, 1000);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-indigo-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </header>

              <div className="flex flex-wrap justify-between select-none">
                <div className="lg:w-3/4 md:w-3/4 w-full lg:h-[80vh] md:h-[80vh] h-full overflow-hidden rounded-lg">
                  <img
                    src={dataImage.images[selectImage]}
                    alt={dataImage.title}
                    srcset={dataImage.title}
                    className="object-fill w-full h-full overflow-auto"
                  />
                </div>
                <div 
                className="px-4 lg:pt-0 md:pt-0 pt-4 overflow-auto lg:h-[80vh] md:h-[80vh] lg:w-1/4 md:w-1/4 w-full">
                  <div className="flex overflow-x-auto lg:flex-wrap md:flex-wrap">
                    {dataImage.images.map((data, key) => {
                      return (
                        <div className="min-w-max lg:min-w-fit md:min-w-fit">
                          <div
                            key={key}
                            className="px-1 pb-4 rounded-lg w-28 lg:w-full md:w-full"
                            onClick={() => setSelectImage(key)}
                          >
                            <img
                              src={data}
                              alt="Foto ke"
                              srcset=""
                              className={`object-fill w-full h-full duration-500 ${
                                selectImage === key ? "scale-95 ring" : ""
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <section
                className="text-sm text-justify text-gray-700 border-t-2 lg:text-base md:text-base indent-6"
                dangerouslySetInnerHTML={{ __html: dataImage.description }}
              ></section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailImage;
