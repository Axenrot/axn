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
      className={`flex flex-col items-center gap-12 overflow-hidden justify-center w-full h-full ${
        selectedOption ? "" : ""
      }`}
    >
      <div
        className={`flex container flex-col items-center justify-center h-full gap-6 ${
          selectedOption ? "lg:gap-24 sm:flex-row" : " lg:gap-24 sm:flex-row"
        }`}
      >
        <ProfilePicture
          className={`sm:w-1/3 md:w-1/2 lg:w-1/4 ${
            selectedOption
              ? "transition-all duration-1000 absolute opacity-10 translate-y-[-200%] sm:translate-y-0 sm:opacity-100 sm:relative z-10 fadeout-up sm:animate-none"
              : "w-[250px] fadein"
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
