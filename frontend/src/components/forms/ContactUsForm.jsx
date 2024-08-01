import React, { useState } from "react";
import axios from "axios";

import ContactImage from "../../assets/contact.png";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/contact-us");
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact-us", {
        name,
        email,
        pesan,
      });
      setName("");
      setEmail("");
      setPesan("");
      getContacts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-14 pt-32 py-20 md:px-15 lg:px-20 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-100% md:w-[50%]">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Kontak Kami</h2>
          <p className="mb-6 text-base">
            Ada pertanyaan? Beri tahu kami atau melalui whatsapp kami!
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="pesan"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Pesan
              </label>
              <textarea
                id="pesan"
                rows="4"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Kirim
            </button>
          </form>
        </div>
        <div>
          <img
            src={ContactImage}
            alt="Contact Us Image"
            className="w-full h-[25rem] object-cover hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
