import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getMeAdmin } from "../../features/auth-slice.js";

import { Button } from "../ui/button.jsx";

import ProfileDropdown from "../atoms/ProfileDropdown.jsx";
import ManajemenSidebar from "../sidebars/PesananSidebar.jsx";

const DashboardNavbar = () => {
  const dispatch = useDispatch();

  const { admin } = useSelector((state) => state.auth);

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

  useEffect(() => {
    dispatch(getMeAdmin());
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
      <div
        className={`navbar-menu relative z-50 ${menuOpen ? "" : "hidden"}`}
        onClick={handleBackdropClick}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav
          className="fixed top-0 left-0 bottom-0 flex lg flex-col w-5/6 max-w-sm py-6 px-6 bg-[#1c2333] text-white border-r overflow-y-auto"
          onClick={handleCloseClick}
        >
          <div className="flex items-center mb-8">
            <Link
              to="/admin-manajemen-dashboard"
              className="font-bold text-[#3083ff] mr-auto text-3xl leading-none"
            >
              <span>Dashboard</span>
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
          </div>
        </nav>
      </div>
      <nav
        className={`fixed top-0 px-5 md:px-14 lg:px-20 py-4 flex justify-between items-center border-b z-20 w-full transition-all duration-300 ease-in-out ${
          isSticky ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div>
          <button
            className="navbar-burger lg:hidden flex items-center text-blue-600 p-3"
            onClick={handleBurgerClick}
          >
            <AiOutlineMenu size={20} />
          </button>
        </div>
        <div>
          <div className="flex w-full">
            <ProfileDropdown />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
