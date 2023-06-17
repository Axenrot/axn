type SectionProps = {
  selectedOption: string;
};

const Section = ({ selectedOption }: SectionProps) => {
  return (
    <div
      className={`${
        selectedOption ? "" : "h-0 translate-y-full"
      } transition-all duration-500 self-end justify-end w-full p-12 mt-auto text-black bg-white`}
    >
      {selectedOption}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
      corrupti asperiores magni alias vitae, aliquam totam suscipit, officiis
      laborum doloremque praesentium quas maiores eos temporibus omnis numquam.
      Aut, natus minus.
    </div>
  );
};

export default Section;
