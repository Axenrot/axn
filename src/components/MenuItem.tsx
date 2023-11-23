"use client";
import { useEffect, useState } from "react";

type MenuItemProps = {
  message: string;
  button: string;
  id: string;
};

const MenuItem = ({ message, button, id }: MenuItemProps) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(window.navigator.maxTouchPoints > 0);
    }
  }, []);

  return (
    <button
      onClick={() => {
        document?.getElementById(id)?.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="relative flex justify-center gap-3 text-5xl font-bold text-center transition-all duration-300 cursor-pointer select-none sm:text-6xl w-fit group lg:text-7xl"
    >
      <span
        className={`absolute transition-all duration-300 whitespace-nowrap ${
          isTouchDevice ? "opacity-0 text-fadeout" : "group-hover:opacity-0"
        }`}
      >
        {message}
      </span>
      <span
        className={`left-0 transition-all duration-500 ${
          isTouchDevice
            ? "opacity-100 text-fadein"
            : "opacity-0 group-hover:opacity-100 sm:group-hover:-translate-y-1"
        }  whitespace-nowrap`}
      >
        {button}
      </span>
    </button>
  );
};

export default MenuItem;
