import React from "react";
import CarImage from "../../assets/carr.jpg";

const AboutUs = () => {
  return (
    <div className="bg-[#f5f7fc] mt-[7.5rem]">
      <div className="container mx-auto px-14 pt-20 py-20 md:px-16 lg:px-20 min-h-screen">
        <div className="flex flex-col md:flex-row gap-0 lg:gap-20">
          <div className="w-100% md:w-1/2 mb-10">
            <h1 className="text-3xl font-medium">
              Kami Membantu Untuk Mendapat Mobil Rental Yang Anda Inginkan.
            </h1>
            <p className="text-lg mt-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, nemo alias deleniti obcaecati asperiores perspiciatis
              fugiat autem. Blanditiis iusto eos, vitae veniam laboriosam esse
              voluptatem voluptatum consectetur aliquid id quod!
            </p>
          </div>
          <div className="w-100% md:w-1/2">
            <img
              src={CarImage}
              alt="Car"
              className="w-full h-[20rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
