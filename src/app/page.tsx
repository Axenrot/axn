"use client";
import ProfileMenu from "@/components/ProfileMenu";
import ProfilePicture from "@/components/ProfilePicture";
import About from "@/components/Sections/About";
import Jobs from "@/components/Sections/Jobs";
import Contact from "@/components/Sections/Contact";
import Techs from "@/components/Sections/Techs";
import "../app/globals.css";

const Home = () => {
  return (
    <main
      className={`flex flex-col items-center overflow-hidden justify-center w-full h-full`}
    >
      <div
        className={`flex container flex-col p-12 lg:flex-row items-center justify-center h-screen gap-6`}
      >
        <ProfilePicture
          className={`sm:w-1/3 md:w-1/2 lg:w-1/4 transition-all duration-1000 absolute opacity-10 translate-y-[-200%] sm:translate-y-0 sm:opacity-100 sm:relative z-10 fadeout-up sm:animate-none`}
        />
        <ProfileMenu />
      </div>

      <About />
      <span className="flex flex-col gap-12 text-white bg-black">
        <Techs />
        <Jobs />

        <Contact />
      </span>
    </main>
  );
};

export default Home;
