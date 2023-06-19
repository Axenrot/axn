"use client";
import { useState } from "react";
import ProfileMenu from "@/components/ProfileMenu";
import ProfilePicture from "@/components/ProfilePicture";
import Section from "@/components/Section";
import "../app/globals.css";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <main
      className={`flex flex-col items-center gap-12 justify-center w-full h-full ${
        selectedOption ? "" : ""
      } border`}
    >
      <div
        className={`flex container flex-col items-center justify-center h-full gap-6 border-red-500 ${
          selectedOption
            ? "flex-row  lg:gap-24 sm:flex-row"
            : " lg:gap-24 sm:flex-row"
        }`}
      >
        <ProfilePicture
          className={`sm:w-1/3 md:w-1/2 lg:w-1/3 xl:w-1/4 ${
            selectedOption
              ? "transition-all duration-1000 absolute opacity-0 translate-x-[200%] sm:translate-x-0 sm:opacity-100 sm:relative z-10 fadeout sm:animate-none"
              : "w-4/5 fadein"
          }`}
        />
        <ProfileMenu
          selectedOption={selectedOption}
          selectOption={setSelectedOption}
        />
      </div>
      <Section selectedOption={selectedOption} />
    </main>
  );
};

export default Home;
