 import { Link } from "react-router-dom";
 import React from "react";
 const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-12">
        <div>
          <h1 className="font-bold text-[26px] text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-900">
            #Vanlifes
          </h1>
        </div>
        <ul className="flex gap-x-14">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Vans</Link>
          </li>
          <li>
            <Link to="/uitest">To ui</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar