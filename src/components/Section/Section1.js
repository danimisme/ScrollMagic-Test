"use client";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { socialsMedia } from "@/data/socialsMedia";
import SocmedButton from "../Elements/SocmedButton";

export default function Section1() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const title = document.getElementById("title-heading");
    const second_heading = document.getElementById("second-heading");
    const image = document.getElementById("image-header");

    new ScrollMagic.Scene({
      triggerElement: title.current,
      triggerHook: "onEnter",
      duration: "50%",
      offset: "-150px",
    })
      .setClassToggle(title, "show")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: second_heading.current,
      triggerHook: "onEnter",
      duration: "50%",
      offset: "-150px",
    })
      .setClassToggle(second_heading, "show")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: image.current,
      triggerHook: "onEnter",
      duration: "50%",
      offset: "-150px",
    })
      .setClassToggle(image, "show")
      .addTo(controller);

    return () => {
      controller.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fcf944] flex flex-col justify-center">
      <div className="flex gap-5 items-center max-w-xl mx-auto">
        <div id="image-header" className="hidden-up">
          <img src="/logo/logo-cat.svg" alt="cat" className="w-48 m-8 " />
          {/* <img src="/logo/logo-dog.svg" alt="cat" className="w-48 m-8 " /> */}
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
    </div>
  );
}
