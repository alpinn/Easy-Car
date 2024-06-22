import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-full px-4">
      <h1 className="w-full text-3xl font-bold text-[#3083ff]">Easy Car</h1>
      <ul className="hidden md:flex">
        <li className="">
          <a href="#">Jadilah Perental</a>
        </li>
        <li className="">
          <a href="#">Sewa Mobil</a>
        </li>
        <button className="p-2 bg-blue-300">Login</button>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden"
      >
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 h-full top-0 w-[60%] border-r border-r-blue-600 bg-blue-500 ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-white m-8">Easy Car</h1>
        <ul className="uppercase p-4">
          <li className="p-4 text-white border-b border-white">
            Jadilah Perental
          </li>
          <li className="p-4 text-white border-b border-white">Sewa Mobil</li>
          <button className="p-2 w-full my-5 bg-white  text-blue-700">
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
