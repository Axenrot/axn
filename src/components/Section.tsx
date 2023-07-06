import { useEffect, useState } from "react";
import Buildings from "./Buildings";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Techs from "./Sections/Techs";
// import Works from "./Sections/Works";

type SectionProps = {
  selectedOption: string;
};

const Section = ({ selectedOption }: SectionProps) => {
  const [prevSelection, setPrevSelection] = useState(selectedOption);
  const [currentSelection, setCurrentSelection] = useState(selectedOption);
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    setTrigger(false);
    if (prevSelection == "") {
      setTimeout(() => {
        setTrigger(true);
      }, 100);
    } else {
      setTimeout(() => {
        setTrigger(true);
        setCurrentSelection(selectedOption);
      }, 1000);
    }
    setPrevSelection(selectedOption);
  }, [selectedOption, prevSelection]);

  function renderSelection() {
    switch (currentSelection) {
      case "About me":
        return <About />;
      case "Works":
        return <Techs />;
      case "Contact":
        return <Contact />;

      default:
        return <></>;
    }
  }

  return (
    <div
      id=""
      className={`${
        trigger && selectedOption ? "h-1/2" : "h-9"
      } relative flex flex-col justify-center transition-all py-6 flex-shrink duration-1000 self-end w-full mt-auto text-black bg-white z-50`}
    >
      <Buildings className={`h-[90px]`} />
      <section
        className={` self-center container px-3 h-4/5 items-center transition-all duration-300 rounded-lg overflow-hidden shadow-[inset_-0px_-0px_150px_rgba(69,60,53,0.05)]`}
      >
        <div
          className={`flex flex-col gap-2 h-full p-3  ${
            trigger && selectedOption ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="w-full text-3xl font-bold text-center opacity-80">
            {currentSelection}
          </h1>
          <div className="h-full overflow-y-auto">{renderSelection()}</div>
        </div>
      </section>
    </div>
  );
};

export default Section;
