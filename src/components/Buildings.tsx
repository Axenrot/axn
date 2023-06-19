// import Image from "next/image";
import redBuildings from "../../public/images/redBuildings.svg";
import whiteBuildings from "../../public/images/whiteBuildings.svg";
import whiteBuildings2 from "../../public/images/whiteBuildings2.svg";
type BuildingsProps = {
  className?: string;
};

const Buildings = ({ className }: BuildingsProps) => {
  return (
    <div
      className={`${className} absolute bottom-[100%] z-50 self-start w-screen`}
    >
      <span className="relativ h-fit">
        <div
          style={{
            backgroundImage: `url(${redBuildings.src})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "450px, 10000%",
            backgroundPosition: "bottom",
            backgroundColor: "transparent",
            animation: "slideBackground 180s linear reverse infinite",
          }}
          className={`absolute w-screen bg-buildings top-0 z-10 ${className}`}
        />

        <div
          style={{
            backgroundImage: `url(${whiteBuildings.src})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "405px, 10000%",
            backgroundPosition: "top",
            backgroundColor: "transparent",
            animation: "slideBackground 250s linear infinite",
          }}
          className={`absolute w-screen bg-buildings opacity-50 top-0 -z-20 ${className}`}
        />

        <div
          style={{
            backgroundImage: `url(${whiteBuildings2.src})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "400px, 10000%",
            backgroundPosition: "top",
            backgroundColor: "transparent",
            animation: "slideBackground 220s linear reverse infinite",
          }}
          className={`absolute w-screen bg-buildings opacity-20 top-0 -z-20 ${className}`}
        />
      </span>
    </div>
  );
};

export default Buildings;
