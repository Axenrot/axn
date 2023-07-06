import javascript from "../../../public/images/tech/javascript.svg";
import next from "../../../public/images/tech/next.svg";
import node from "../../../public/images/tech/node.svg";
import react from "../../../public/images/tech/react.svg";
import tailwindcss from "../../../public/images/tech/tailwindcss.svg";
import typescript from "../../../public/images/tech/typescript.svg";
import python from "../../../public/images/tech/python.svg";
import git from "../../../public/images/tech/git.svg";
import Image from "next/image";

const Techs = () => {
  // const size = 40;
  return (
    <div className="flex flex-row gap-[6px] md:gap-12 xl:gap-24 2xl:gap-32 items-center justify-between px-3 sm:px-12 py-6 font-semibold">
      <div id="react" onMouseEnter={() => {}} className="w-fit">
        <Image
          src={react}
          alt="React.js"
          className="w-full transition-all duration-300 hover:scale-125"
        />
      </div>
      <div id="javascript" onMouseEnter={() => {}} className="w-fit">
        <Image
          src={javascript}
          alt="JavaScript"
          className="w-full transition-all duration-300 hover:scale-125"
        />
      </div>
      <div id="tailwindcss" onMouseEnter={() => {}} className="w-fit">
        <Image
          src={tailwindcss}
          alt="TailwindCSS"
          className="w-full transition-all duration-300 hover:scale-125"
        />
      </div>
      <div id="typescript" onMouseEnter={() => {}} className="w-fit">
        <Image
          src={typescript}
          alt="TypeScript"
          className="w-full transition-all duration-300 hover:scale-125"
        />
      </div>
      <div id="next" onMouseEnter={() => {}} className="w-fit">
        <Image
          src={next}
          alt="Next.js"
          className="w-full transition-all duration-300 hover:scale-125"
        />
      </div>
      <div id="node" onMouseEnter={() => {}} className="w-fit">
        <Image
          src={node}
          alt="Node.js"
          className="w-full transition-all duration-300 hover:scale-125"
        />
      </div>
      <div id="git" onMouseEnter={() => {}} className="w-fit">
        <Image
          src={git}
          alt="Git"
          className="w-full transition-all duration-300 hover:scale-125"
        />
      </div>
      <div id="python" onMouseEnter={() => {}} className="w-fit">
        <Image
          src={python}
          alt="Python"
          className="w-full transition-all duration-300 hover:scale-125"
        />
      </div>
    </div>
  );
};

export default Techs;
