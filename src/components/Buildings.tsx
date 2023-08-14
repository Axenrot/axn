// import Image from "next/image";
import redBuildings from "../../public/images/redBuildings.svg";
import whiteBuildings from "../../public/images/whiteBuildings.svg";
import whiteBuildings2 from "../../public/images/whiteBuildings2.svg";
import darkBuildings from "../../public/images/darkBuildings.svg";
import darkBuildings2 from "../../public/images/darkBuildings2.svg";
import { useEffect, useState } from "react";
type BuildingsProps = {
  className?: string;
};

const Buildings = ({ className }: BuildingsProps) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(window.navigator.maxTouchPoints > 0);
    }
  }, []);
  return (
    <div className={`${className} w-full`}>
      <span className="relative h-fit">
        <div
          style={{
            backgroundImage: `url(${darkBuildings.src})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "450px, 10000%",
            backgroundPosition: "bottom",
            backgroundColor: "transparent",
            animation: `slideBackground ${
              isTouchDevice ? "20s" : "180s"
            } linear reverse infinite`,
          }}
          className={`absolute w-screen top-0 z-10 ${className}`}
        />

        {/* <div
          style={{
            backgroundImage: `url(${whiteBuildings2.src})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "405px, 10000%",
            backgroundPosition: "top",
            backgroundColor: "transparent",
            animation: `slideBackground ${
              isTouchDevice ? "20s" : "180s"
            } linear reverse infinite`,
          }}
          className={`absolute w-screen top-0 -z-20 ${className}`}
        /> */}

        <div
          style={{
            backgroundImage: `url(${whiteBuildings.src})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "405px, 10000%",
            backgroundPosition: "top",
            backgroundColor: "transparent",
            animation: `slideBackground ${
              isTouchDevice ? "25s" : "250s"
            } linear infinite`,
          }}
          className={`absolute w-screen opacity-50 top-0 -z-20 ${className}`}
        />

        <div
          style={{
            backgroundImage: `url(${whiteBuildings2.src})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "400px, 10000%",
            backgroundPosition: "top",
            backgroundColor: "transparent",
            animation: `slideBackground  ${
              isTouchDevice ? "22s" : "220s"
            } linear reverse infinite`,
          }}
          className={`absolute w-screen opacity-20 top-0 -z-20 ${className}`}
        />

        <div
          style={{
            backgroundImage: `url(${darkBuildings.src})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "405px, 10000%",
            backgroundPosition: "top",
            backgroundColor: "transparent",
            animation: `slideBackground  ${
              isTouchDevice ? "25s" : "250s"
            } linear infinite`,
          }}
          className={`absolute w-screen opacity-50 top-0 -z-20 ${className}`}
        />

        <div
          style={{
            backgroundImage: `url(${darkBuildings2.src})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "400px, 10000%",
            backgroundPosition: "top",
            backgroundColor: "transparent",
            animation: `slideBackground  ${
              isTouchDevice ? "22s" : "220s"
            } linear reverse infinite`,
          }}
          className={`absolute w-screen opacity-20 top-0 -z-20 ${className}`}
        />
      </span>
    </div>
  );
};

export default Buildings;
