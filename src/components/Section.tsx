import { useEffect, useState } from "react";
import Buildings from "./Buildings";

type SectionProps = {
  selectedOption: string;
};

const Section = ({ selectedOption }: SectionProps) => {
  const [prevSelection, setPrevSelection] = useState(selectedOption);
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
      }, 1000);
    }
    setPrevSelection(selectedOption);
  }, [selectedOption, prevSelection]);

  return (
    <div
      id=""
      className={`${
        trigger && selectedOption ? "h-1/2" : "h-9"
      } relative flex flex-col justify-center transition-all flex-shrink-0 duration-1000 self-end w-full mt-auto text-black  bg-carmesim z-50`}
    >
      <Buildings className={`h-[90px]`} />
      <section
        className={`${
          trigger && selectedOption ? "opacity-100" : "opacity-0"
        } self-center container px-3 h-4/5  overflow-y-auto items-center transition-all duration-300`}
      >
        <h1 className="text-3xl font-semibold opacity-80">{selectedOption}</h1>
        <span className="flex flex-col">
          <p className="opacity-80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            inventore recusandae, soluta laudantium nemo magni laborum provident
            accusantium aliquam quas expedita molestias distinctio asperiores
            excepturi sint. Dignissimos aliquam doloremque est.
          </p>
          <p className="opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            necessitatibus nisi maiores sit suscipit quasi dolore esse sint est,
            modi, velit nesciunt perspiciatis ex, eos sunt doloribus eaque
            assumenda voluptas.
          </p>
          <p className="opacity-80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            recusandae atque quae dolorum harum dignissimos, aut sint adipisci
            nobis placeat quos magnam ipsa molestias dolor quasi laudantium
            pariatur. Minima, repellendus!
          </p>
        </span>
      </section>
    </div>
  );
};

export default Section;
