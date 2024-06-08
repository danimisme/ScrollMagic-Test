"use client";
import Link from "next/link";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";

export default function SocmedButton({ icon, link, socmedId, index }) {
  useEffect(() => {
    const offset = -index * 20;
    const controller = new ScrollMagic.Controller();

    const socmedButton = document.getElementById(socmedId);
    new ScrollMagic.Scene({
      triggerElement: socmedButton.current,
      triggerHook: "onEnter",
      duration: "25%",
      offset: `${offset}px`,
    })
      .setClassToggle(socmedButton, "show")
      .addTo(controller);
    return () => {
      controller.destroy();
    };
  }, []);

  return (
    <Link href={link}>
      <div id={socmedId} className="w-14 group hidden-bottom">
        <img
          src={icon}
          alt=""
          className="w-full group-hover:scale-75 transition duration-300"
        />
      </div>
    </Link>
  );
}
