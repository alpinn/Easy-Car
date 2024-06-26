import react, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav className="sticky top-0 z-40 shadow-md">
        <div className="relative max-w-full mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center h-32">
              {/* logo */}
              <div className="flex items-center">
                <a
                  href="/"
                  className="font-bold text-[#3083ff] text-3xl"
                >
                  <span>Easy Car</span>
                </a>
              </div>
            </div>
            {/* primary */}
            <div className="hidden md:flex md:px-20 lg:px-40 gap-10">
              <div className="mt-14">
                <a
                  href="#"
                  className="p-3 rounded hover:text-white hover:bg-blue-400 hover:ease-out  hover:duration-300"
                >
                  Jadilah Perental
                </a>
              </div>
              <div className="mt-14">
                <a
                  href="#"
                  className="p-3 rounded hover:text-white hover:bg-blue-400 hover:ease-out  hover:duration-300"
                >
                  Sewa Mobil
                </a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              {/* Mobile navigation toggle */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  {!toggleMenu ? (
                    <AiOutlineMenu size={20} />
                  ) : (
                    <AiOutlineClose size={20} />
                  )}
                </button>
              </div>
            </div>
            <div className="hidden md:block lg:block">
              <button className="rounded mt-12 text-white bg-blue-500 py-2 px-4">
                Login
              </button>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-blue-500 overflow-hidden flex flex-col md:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-14 py-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider text-white">
              <a href="#">Jadilah Perental</a>
              <a href="#">Sewa Mobil</a>
              <button className="rounded  text-blue-700 bg-white py-2 px-4 ">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
