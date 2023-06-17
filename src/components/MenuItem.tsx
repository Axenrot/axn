"use client";
import useTouchScreenCheck from "@/hooks/useTouchScreenCheck";
import { Dispatch, SetStateAction } from "react";

type MenuItemProps = {
  message: string;
  button: string;
  selectOption: Dispatch<SetStateAction<string>>;
};

const MenuItem = ({ message, button, selectOption }: MenuItemProps) => {
  return (
    <button
      onClick={() => selectOption(button)}
      className="relative flex justify-center gap-3 font-bold cursor-pointer select-none lg:justify-start group text-7xl md:text-8xl xl:text-9xl"
    >
      <span
        className={`absolute transition-all duration-300 whitespace-nowrap ${
          useTouchScreenCheck() ? "opacity-0" : "group-hover:opacity-0"
        }`}
      >
        {message}
      </span>
      <span
        className={`left-0 transition-all duration-500 ${
          useTouchScreenCheck()
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 sm:group-hover:translate-x-4"
        }  whitespace-nowrap`}
      >
        {button}
      </span>
    </button>
  );
};

export default MenuItem;
