import React from "react";
import WhatsappLogo from "../../assets/whatsapplogo.png";

const Whatsaap = () => {
  return (
    <div
      className="fixed bottom-0 right-0 mb-4 mr-4 md:mb-6 md:mr-6 lg:mb-8 lg:mr-8 xl:mb-10 xl:mr-10"
      style={{ zIndex: 1000 }}
    >
      <a
        href="https://wa.me/your-phone-number"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={WhatsappLogo}
          alt="WhatsApp"
          className="w-11 h-11 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
        />
      </a>
    </div>
  );
};

export default Whatsaap;
