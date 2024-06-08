"use client";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";

export default function CardProject({ title, description, index, id }) {
  let bg = "bg-[#000000]";
  if (index % 2 === 0) {
    bg = "bg-[#31be32]";
  } else if (index % 3 === 0) {
    bg = "bg-[#ff97d0]";
  }

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const cardProject = document.getElementById(id);
    new ScrollMagic.Scene({
      triggerElement: cardProject,
      triggerHook: "onEnter",
      reverse: true,
      duration: "110%",
      offset: "50px",
    })
      .setClassToggle(cardProject, "show")
      .addTo(controller);
    return () => {
      controller.destroy();
    };
  }, []);

  return (
    <div
      id={id}
      className={`${bg} w-ful group cursor-pointer mb-10 hidden-left`}
    >
      <div className="text-white p-16 border-4 border-white group-hover:translate-x-4 transition group-hover:-translate-y-4 duration-300">
        <h1 className="text-5xl font-bold mb-10">{title}</h1>
        <p className="text-3xl">{description}</p>
      </div>
    </div>
  );
}
