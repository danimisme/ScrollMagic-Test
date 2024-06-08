"use client";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { socialsMedia } from "@/data/socialsMedia";
import SocmedButton from "../Elements/SocmedButton";
import Link from "next/link";
import ImageSlider from "../Elements/ImageSlider";

export default function Section1() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const title = document.getElementById("title-heading");
    const second_heading = document.getElementById("second-heading");
    const image = document.getElementById("image-header");

    new ScrollMagic.Scene({
      triggerElement: title.current,
      triggerHook: "onEnter",
      duration: "60%",
      offset: "-150px",
    })
      .setClassToggle(title, "show")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: second_heading.current,
      triggerHook: "onEnter",
      duration: "60%",
      offset: "-150px",
    })
      .setClassToggle(second_heading, "show")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: image.current,
      triggerHook: "onEnter",
      duration: "60%",
      offset: "-150px",
    })
      .setClassToggle(image, "show")
      .addTo(controller);

    return () => {
      controller.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fcf944] flex flex-col justify-center relative">
      <Link href="/" className="fixed top-8 right-8 bg-white group ">
        <div className="px-2 py-2 border-4 border-black group-hover:translate-x-2 group-hover:-translate-y-2 transition duration-300">
          <p className="text-3xl">donate</p>
        </div>
      </Link>
      <div className="flex gap-5 items-center max-w-xl mx-auto ">
        <div
          id="image-header"
          className="hidden-up overflow-hidden relative  mt-7 "
        >
          <ImageSlider />
        </div>
        <div id="title-heading" className=" hidden-right">
          <h1 className="text-6xl font-bold leading-[110%]">
            Innovative <br />
            Solution <br /> for <br /> Animals
          </h1>
        </div>
      </div>
      <div id="second-heading" className="hidden-bottom ">
        <h2 className="mt-10 text-4xl text-center">charity organization</h2>
      </div>
      <div className="flex justify-center gap-5 mt-5">
        {socialsMedia.map((social, index) => (
          <SocmedButton
            key={index}
            icon={social.icon}
            link={social.link}
            index={index}
            socmedId={`socmed-${index}`}
          />
        ))}
      </div>
      <div className="flex justify-center mx-auto relative w-8 h-20 ">
        <div className=" bounce-button ">
          <img
            src="/logo/chevron-down-icon.svg"
            alt="down"
            className="w-6 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
