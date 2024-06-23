import react, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // const [nav, setNav] = useState(false);

  // const handleNav = () => {
  //   setNav(!nav);
  // };
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="max-w-full mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-[#3083ff] items-center text-3xl"
                >
                  <span>Easy Car</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden md:flex gap-10 ">
                <a
                  href="#"
                  className="mt-2"
                >
                  Jadilah Perental
                </a>
                <a
                  href="#"
                  className="mt-2"
                >
                  Sewa Mobil
                </a>
                <button className="rounded  text-white bg-blue-500 py-2 px-4 ">
                  Login
                </button>
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
