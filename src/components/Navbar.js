import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  console.log(menu)
  return (
    <nav className="mb-5 bg-transparent border-b-2 lg:border-b-0">
      <div className="container py-5">
        <div className="flex justify-between">
          <div className="w-full lg:justify-between lg:items-center lg:flex md:flex md:justify-between md:items-center">
            <div className="text-2xl font-bold text-indigo-700">Farid</div>
            <div>
            {menu === false && (
              <ol className="space-y-2 lg:space-x-4 md:space-x-4">
                <li className="nav-link">
                  <a href={"#home"}>Home</a>
                </li>
                <li className="nav-link">
                  <a href={"#layanan"}>Layanan</a>
                </li>
                <li className="nav-link">
                  <a href={"#portfolio"}>Portfolio</a>
                </li>
                <a href={"#contact"}>
                  <button className="btn btn-primary">Contact</button>
                </a>
              </ol>
            )}
            </div>
          </div>
          <div className="lg:hidden md:hidden">
          <button onClick={() => setMenu(!menu)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
