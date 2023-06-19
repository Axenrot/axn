"use client";
import useTouchScreenCheck from "@/hooks/useTouchScreenCheck";
import { Dispatch, SetStateAction } from "react";

type MenuItemProps = {
  message: string;
  button: string;
  selectOption: Dispatch<SetStateAction<string>>;
  selectedOption: string;
};

const MenuItem = ({
  message,
  button,
  selectOption,
  selectedOption,
}: MenuItemProps) => {
  return (
    <button
      onClick={() => {
        if (selectedOption == button) {
          selectOption("");
        } else {
          selectOption(button);
        }
      }}
      className="relative flex justify-center gap-3 font-bold text-center transition-all duration-300 cursor-pointer select-none w-fit group text-7xl lg:text-8xl"
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
            : "opacity-0 group-hover:opacity-100 sm:group-hover:-translate-y-1"
        }  whitespace-nowrap`}
      >
        {button}
      </span>
    </button>
  );
};

export default MenuItem;
