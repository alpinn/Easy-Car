import React from "react";
import { Link } from "react-router-dom";

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGlobe, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-[5.5rem] py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              to="/"
              className="flex items-center"
            >
              <span className="self-center mb-4 text-3xl font-semibold whitespace-nowrap text-blue-500">
                Easy Car
              </span>
            </Link>
            <p className="text-white text-lg">Bekasi, Indonesia</p>
            <div className="flex flex-row md:flex-row justify-between mt-4 gap-2 md:gap-8 mb-2">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-2">
                  <BsFillTelephoneFill />
                </div>
                <span className="text-white p-2">+62 812 3456 789</span>
              </div>
              {/* <div className="flex items-center">
                <div className="bg-white rounded-full p-2">
                  <FaGlobe />
                </div>
                <span className="text-white p-2">easycar.com</span>
              </div> */}
            </div>
            <div className="flex items-center">
              <div className="bg-white rounded-full p-2">
                <IoMdMail />
              </div>
              <span className="text-white p-2">easycar@mail.com</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-20">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Menu Utama
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="/about-us"
                    className="hover:underline"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Sewa Mobil
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Kontak Kami
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Sosial Media
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://flowbite.com/"
              className="hover:underline"
            >
              Easy Car™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
