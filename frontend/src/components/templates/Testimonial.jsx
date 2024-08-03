import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/testimonial")
      .then((response) => {
        console.log(response.data);
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-[#f5f7fc]">
      <div className=" container mx-auto mt-10 mb-32 px-10 md:px-28 lg:px-36 py-24">
        <div className="text-center font-bold">
          <h2 className="text-xl  text-[#aeb0b5] mb-4 uppercase">
            Testimonials
          </h2>
          <p className="text-3xl font-bold mb-8">What people say about us?</p>
        </div>
        <Slider {...settings}>
          {testimonials.map((item) => (
            <TestimonialCard
              key={item._id}
              testi={item}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
