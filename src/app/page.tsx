"use client";
import ProfileMenu from "@/components/ProfileMenu";
import ProfilePicture from "@/components/ProfilePicture";
import Section from "@/components/Section";
import Buildings from "@/components/Buildings";
import "../app/globals.css";

const Home = () => {
  return (
    <main
      className={`flex flex-col items-center overflow-hidden justify-center w-full h-full`}
    >
      <div
        className={`flex container items-center overflow-x-hidden h-screen justify-center`}
      >
        <ProfilePicture
          className={`w-[400px] transition-all duration-1000 sm:relative z-10`}
        />
        <ProfileMenu />
      </div>
      <div className="w-full overflow-hidden">
        <Buildings className={`absolute bottom-0 h-[80px] md:col-span-2`} />
      </div>

      <Section selectedOption={"About me"} />
      <Section selectedOption={"Works"} />
      <Section selectedOption={"Contact"} />
    </main>
  );
};

export default Home;
