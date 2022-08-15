import React from "react";
import { useContext } from "react";
import { MyContext } from "../../../context/Index";
import { datas } from "../../../data/CarouselData";

const Project = () => {
  const { setDetailProject } = useContext(MyContext);

  const setDetailProjectHandler = (data) => {
    setDetailProject({ ...data, detail: true });
  };

  return (
    <section className="flex flex-wrap justify-evenly">
      {datas.map((data, key) => {
        return (
          <>
            <div
              className="w-full px-4 select-none lg:w-1/2 md:w-1/2"
              key={key}
              onClick={() => setDetailProjectHandler({ ...data })}
            >
              <figure className="my-2 card">
                <img
                  src={data.image}
                  alt={data.title}
                  srcset={data.title}
                  className="object-cover w-full h-full"
                />
                <figcaption className="absolute inset-x-0 bottom-0 duration-500 translate-y-full bg-indigo-500 bg-opacity-50">
                  <div className="px-1 py-1 md:px-2 md:py-2">
                    <h4 className="text-sm text-center text-white md:text-lg">
                      {data.title}
                    </h4>
                  </div>
                </figcaption>
              </figure>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default Project;
