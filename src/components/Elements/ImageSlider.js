"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <Slider {...settings} className="-my-7 ">
      <div className=" h-full my-10 p-6 ">
        <img src="/logo/logo-cat.svg" alt="cat" className="h-full" />
      </div>
      <div className=" h-full my-10 p-6">
        <img src="/logo/logo-dog.svg" alt="cat" className="h-full" />
      </div>
    </Slider>
  );
}
