import Buildings from "../Buildings";

const About = () => {
  return (
    <div className="relative flex flex-col w-full text-white bg-black">
      <Buildings className="h-[90px]" />
      <div
        id="about"
        className="flex container py-12 mx-auto px-3 flex-col gap-[6px] text-xl font-light"
      >
        <h2 className="text-2xl font-semibold text-gray-200">About Me</h2>
        {/* 
I&apos;m a Front-End Web Developer with expertise in React.js, Next.js, and Tailwind CSS. I am passionate about delivering seamless user experiences (UX/UI) and as a former designer and technological scientist, I offer a unique perspective to my work by combining technical prowess with a discerning design eye. 
Constantly pushing boundaries to make each day better than yesterday! */}
        <p>
          I&apos;m a Front-End Web Developer with expertise in React.js,
          Next.js, and Tailwind CSS. I am passionate about delivering seamless
          user experiences (UX/UI) and as a former designer and technological
          scientist, I offer a unique perspective to my work by combining
          technical prowess with a discerning design eye.
        </p>
        <p>
          Constantly pushing boundaries to make each day better than yesterday!
        </p>
      </div>
    </div>
  );
};

export default About;
