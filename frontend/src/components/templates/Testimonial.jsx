import React, { useState } from "react";
import Slider from "react-slick";
import TestimonialCard from "../card/TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#3083ff",
          color: "white",
          borderRadius: "10px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#3083ff",
          color: "white",
          borderRadius: "10px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image:
        "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg",
    },
    {
      id: 3,
      name: "Bob Smith",
      text: "Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image:
        "https://techcrunch.com/wp-content/uploads/2016/09/2016_01_23_weebly_45251web.jpg",
    },
  ];

  return (
    <div className="bg-[#f5f7fc]">
      <div className=" container mx-auto mt-10 mb-10 px-10 md:px-20 lg:px-28 py-24">
        <div className="text-center font-bold">
          <h2 className="text-xl  text-[#aeb0b5] mb-4 uppercase">
            Testimonials
          </h2>
          <p className="text-3xl font-bold mb-8">What people say about us?</p>
        </div>
        <Slider {...settings}>
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              text={item.text}
              image={item.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
