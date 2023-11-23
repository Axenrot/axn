"use client";
import MenuItem from "./MenuItem";

const ProfileMenu = () => {
  return (
    <div
      className={`flex flex-col pb-12 sm:pb-0 flex-shrink sm:gap-3 w-4/5 sm:w-1/2 md:w-3/5 lg:1/2 items-center justify-center`}
    >
      <MenuItem message={`Hello`} button={"About me"} id={"about"} />
      <MenuItem message={"I'm"} button={"Jobs"} id={"jobs"} />
      <MenuItem message={"Leon"} button={"Contact"} id={"contact"} />
    </div>
  );
};

export default ProfileMenu;
