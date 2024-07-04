import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#"
              className="text-xl font-bold"
            >
              Easy Car
            </a>
            <p className="mt-2 text-gray-400">Indonesia</p>
            <p className="mt-2 text-gray-400">+62 1234 56 78</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Our Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                >
                  Tentang Kami
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300"
                >
                  Sewa Mobi
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300"
                >
                  Cars
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4"></ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>Copyright 2022 © Carentall. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
