import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getMe } from "../../features/auth-slice.js";

import { Button } from "../ui/button.jsx";

import ProfileDropdown from "../atoms/ProfileDropdown.jsx";

const Navbar = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleBackdropClick = () => {
    setMenuOpen(false);
  };

  const handleCloseClick = () => {
    setMenuOpen(false);
  };

  const isLoggedIn = !!user;

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 px-14 md:px-20 lg:px-28 py-4 flex justify-between items-center z-50 w-full transition-all duration-300 ease-in-out ${
          isSticky ? "bg-white shadow-md" : "bg-white lg:bg-transparent"
        }`}
      >
        <Link
          to="/"
          className="font-bold text-[#3083ff] text-3xl leading-none"
        >
          <span>Easy Car</span>
        </Link>
        <div>
          {isLoggedIn ? (
            <div className="hidden lg:flex w-full">
              <ProfileDropdown />
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden lg:flex"
            >
              <Button className="rounded text-white bg-blue-600 hover:bg-blue-500">
                Login
              </Button>
            </Link>
          )}
          <button
            className="navbar-burger lg:hidden flex items-center text-blue-600 p-3"
            onClick={handleBurgerClick}
          >
            <AiOutlineMenu size={20} />
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 ${
            menuOpen ? "" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/about-us"
              className="hover:text-blue-500 font-bold text-gray-500 text-sm"
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              to="/book-car"
              className="hover:text-blue-500 font-bold text-gray-500 text-sm"
            >
              Sewa Mobil
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="hover:text-blue-500 font-bold text-gray-500 text-sm"
            >
              Kontak Kami
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${menuOpen ? "" : "hidden"}`}
        onClick={handleBackdropClick}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav
          className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
          onClick={handleCloseClick}
        >
          <div className="flex items-center mb-8">
            <Link
              to="/"
              className="font-bold text-[#3083ff] mr-auto text-3xl leading-none"
            >
              <span>Easy Car</span>
            </Link>
            <button className="navbar-close">
              <AiOutlineClose size={20} />
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/about-us"
                >
                  Tentang Kami
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/book-car"
                >
                  Sewa Mobil
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/contact-us"
                >
                  Kontak Kami
                </Link>
              </li>
            </ul>
            {isLoggedIn ? (
              <div className="mt-5">
                <ProfileDropdown />
              </div>
            ) : (
              <Link to="/login">
                <Button className="rounded w-full text-white bg-blue-600 hover:bg-blue-500">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
