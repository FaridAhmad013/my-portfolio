import React from "react";

export const Navlink = () => {
  return (
    <div>
      <ol className="hidden space-y-2 lg:space-x-4 md:space-x-4 lg:block md:block">
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
    </div>
  );
};

export const NavlinkResponsive = () => {
  return (
    <div className="fixed inset-x-0 z-[9999] block md:hidden">
      <div className="flex items-center justify-center h-screen p-5 bg-white rounded-lg shadow-lg">
        <ol className="space-y-10 lg:space-y-0 md:space-y-0">
          <li className="nav-link">
            <a href={"#home"}>Home</a>
          </li>
          <li className="nav-link">
            <a href={"#layanan"}>Layanan</a>
          </li>
          <li className="nav-link">
            <a href={"#portfolio"}>Portfolio</a>
          </li>
          <a href={"#contact"} className="flex justify-center">
            <button className="btn btn-primary">Contact</button>
          </a>
        </ol>
      </div>
    </div>
  );
};
