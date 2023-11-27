import javascript from "../../../public/images/tech/javascript.svg";
import next from "../../../public/images/tech/next.svg";
import node from "../../../public/images/tech/node.svg";
import react from "../../../public/images/tech/react.svg";
import tailwindcss from "../../../public/images/tech/tailwindcss.svg";
import typescript from "../../../public/images/tech/typescript.svg";
import python from "../../../public/images/tech/python.svg";
import git from "../../../public/images/tech/git.svg";
import Image from "next/image";
import TagCloud from "@frank-mayer/react-tag-cloud";

const Techs = () => {
  return (
    <div id="techs" className="container flex p-3 mx-auto">
      <span className="flex w-1/3 bg-red-500">
        Works Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Laboriosam distinctio suscipit recusandae, voluptatem odio numquam ipsum
        voluptatum debitis, officiis unde quaerat? Aut perspiciatis nostrum
        repellendus placeat modi earum aspernatur voluptatem.
      </span>

      {/* <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "fast",
          useHTML: true,
        })}
        // onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        // onClickOptions={{ passive: true }}
      >
        {[
          <Image
            src={react}
            alt="React.js"
            className="w-full transition-all duration-300 hover:scale-125 filter invert"
          />,
          <Image
            src={react}
            alt="React.js"
            className="w-full transition-all duration-300 hover:scale-125 filter invert"
          />,
          <Image
            src={react}
            alt="React.js"
            className="w-full transition-all duration-300 hover:scale-125 filter invert"
          />,
          <Image
            src={react}
            alt="React.js"
            className="w-full transition-all duration-300 hover:scale-125 filter invert"
          />,
        ]}
      </TagCloud> */}
      {/* <div className="flex flex-row gap-[6px] md:gap-12 xl:gap-24 2xl:gap-32 items-center justify-between px-3 sm:px-12 py-6 font-semibold">
        <div id="react" onMouseEnter={() => {}} className="w-fit">
          <Image
            src={react}
            alt="React.js"
            className="w-full transition-all duration-300 hover:scale-125 filter invert"
          />
        </div>
        <div id="javascript" onMouseEnter={() => {}} className="w-fit">
          <Image
            src={javascript}
            alt="JavaScript"
            className="w-full transition-all duration-300 hover:scale-125 filter invert"
          />
        </div>
        <div id="tailwindcss" onMouseEnter={() => {}} className="w-fit">
          <Image
            src={tailwindcss}
            alt="TailwindCSS"
            className="w-full transition-all duration-300 hover:scale-125 filter invert"
          />
        </div>
        <div id="typescript" onMouseEnter={() => {}} className="w-fit">
          <Image
            src={typescript}
            style={{ fill: "white" }}
            alt="TypeScript"
            className="w-full transition-all duration-300 hover:scale-125 filter invert"
          />
        </div>
        <div id="next" onMouseEnter={() => {}} className="w-fit">
          <Image
            src={next}
            alt="Next.js"
            className="w-full transition-all duration-300 hover:scale-125 filter invert"
          />
        </div>
        <div id="node" onMouseEnter={() => {}} className="w-fit">
          <Image
            src={node}
            alt="Node.js"
            className="w-full transition-all duration-300 hover:scale-125 filter invert"
          />
        </div>
        <div id="git" onMouseEnter={() => {}} className="w-fit">
          <Image
            src={git}
            alt="Git"
            className="w-full transition-all duration-300 hover:scale-125 filter invert"
          />
        </div>
        <div id="python" onMouseEnter={() => {}} className="w-fit">
          <Image
            src={python}
            alt="Python"
            className="w-full transition-all duration-300 hover:scale-125 filter invert"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Techs;
