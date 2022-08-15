import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Navlink, NavlinkResponsive as Responsive } from "./Navlink";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="mb-5 bg-white border-b-2 select-none lg:border-b-0">
      <div className="container py-5">
        <div className="flex justify-between">
          <div className="w-full lg:justify-between lg:items-center lg:flex md:flex md:justify-between md:items-center ">
            <a href={"#home"} className="flex items-center w-10 h-10">
              <img
                src={Logo}
                alt="Fari Ahmad Fadhilah"
                srcset={Logo}
                className="object-cover mr-2"
              />
              <h3 className="text-transparent bg-gradient-to-r from-cyan-600 via-blue-800 to-sky-600 bg-clip-text">
                Farid
              </h3>
            </a>

            {menu ? <Responsive /> : <Navlink />}
          </div>
          <div className="lg:hidden md:hidden">
            <button onClick={() => setMenu(!menu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {!menu ? (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
