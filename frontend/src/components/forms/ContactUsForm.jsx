import React, { useState } from "react";
import { useForm } from "react-hook-form";

import ContactImage from "../../assets/contact.png";

const ContactUsForm = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mx-auto px-14 pt-32 py-20 md:px-15 lg:px-20 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-100% md:w-[50%]">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Kontak Kami</h2>
          <p className="mb-6 text-base">
            Ada pertanyaan? Beri tahu kami atau melalui whatsapp kami!
          </p>
          {successMessage && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
              role="alert"
            >
              <p className="font-bold">{successMessage}</p>
            </div>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
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
                {...register("name", { required: "Nama Lengkap is required" })}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">
                  {errors.name.message}
                </span>
              )}
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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Pesan
              </label>
              <textarea
                id="message"
                rows="4"
                {...register("message", { required: "Pesan is required" })}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.message && (
                <span className="text-red-500 text-xs">
                  {errors.message.message}
                </span>
              )}
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
