"use client";
import { useState } from "react";
import ProfileMenu from "@/components/ProfileMenu";
import ProfilePicture from "@/components/ProfilePicture";
import Section from "@/components/Section";
import "../app/globals.css";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <main className="flex flex-col items-center justify-center w-full h-full gap-6 overflow-hidden border">
      <div className="flex flex-col items-center justify-center h-full gap-6 border lg:gap-24 lg:flex-row">
        <ProfilePicture />
        <ProfileMenu selectOption={setSelectedOption} />
      </div>
      <Section selectedOption={selectedOption} />
    </main>
  );
};

export default Home;
