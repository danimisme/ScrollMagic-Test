"use client";
import Link from "next/link";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
export default function ShelterButton({ name, id }) {
  console.log(id);
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const shelterButton = document.getElementById(id);
    new ScrollMagic.Scene({
      triggerElement: shelterButton,
      triggerHook: "onEnter",
      reverse: true,
      duration: "150%",
      offset: "-100px",
    })
      .setClassToggle(shelterButton, "show")
      .addTo(controller);
    return () => {
      controller.destroy();
    };
  }, []);
  return (
    <Link
      id={id}
      href="/"
      className="bg-white  group cursor-default hidden-bottom "
    >
      <div className="flex justify-center items-center h-full py-12 px-6  text-center border-4 border-black group-hover:translate-x-4 group-hover:-translate-y-4 transition duration-300">
        <p className="text-xl">{name}</p>
      </div>
    </Link>
  );
}
