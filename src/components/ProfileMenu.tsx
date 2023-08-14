"use client";
import MenuItem from "./MenuItem";

const ProfileMenu = () => {
  return (
    <div
      className={`flex flex-col pb-12 sm:pb-0 flex-shrink sm:gap-3 mx-auto items-center justify-center`}
    >
      <MenuItem message={`Hello`} button={"About me"} />
      <MenuItem message={"I'm"} button={"Works"} />
      <MenuItem message={"Leon"} button={"Contact"} />
    </div>
  );
};

export default ProfileMenu;
