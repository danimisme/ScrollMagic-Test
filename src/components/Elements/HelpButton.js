"use client";
import Link from "next/link";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";

export default function HelpButton() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const helpButton = document.getElementById("help-button");
    new ScrollMagic.Scene({
      triggerElement: helpButton,
      triggerHook: "onEnter",
      duration: "150%",
      //   offset: "-50px",
    })
      .setClassToggle(helpButton, "show")
      .addTo(controller);
    return () => {
      controller.destroy();
    };
  });
  return (
    <Link id="help-button" href="/" className="bg-[#ff97d0] group hidden-left ">
      <div className="flex gap-5 justify-center items-center h-full px-10 py-5 text-center border-4 border-black">
        <p className="text-2xl font-bold">apply for help</p>
        <img
          src="/logo/arrow.png"
          alt="arrow"
          className="h-8 rotate-180 group-hover:translate-x-4 transition duration-300"
        />
      </div>
    </Link>
  );
}
