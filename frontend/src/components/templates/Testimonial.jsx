import React from "react";
import Slider from "react-slick";
import TestimonialCard from "../card/TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      image: "https://simpleicon.com/wp-content/uploads/account.png",
    },
    {
      id: 2,
      name: "Jane Doe",
      text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "https://simpleicon.com/wp-content/uploads/account.png",
    },
    {
      id: 3,
      name: "Bob Smith",
      text: "Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "https://simpleicon.com/wp-content/uploads/account.png",
    },
    {
      id: 4,
      name: "Alice Johnson",
      text: "Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "https://simpleicon.com/wp-content/uploads/account.png",
    },
    {
      id: 5,
      name: "Mike Brown",
      text: "Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "https://simpleicon.com/wp-content/uploads/account.png4",
    },
  ];

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        What people say about us
      </h2>
    </div>
  );
};

export default Testimonial;
