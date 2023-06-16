"use client";
import MenuItem from "./MenuItem";
import useTouchScreenCheck from "@/hooks/useTouchScreenCheck";

const ProfileMenu = () => {
  console.log();
  return (
    <div className="flex flex-col text-center">
      <MenuItem
        message={`Hello${useTouchScreenCheck() ? "" : "."}`}
        button={"About me"}
      />
      <MenuItem message={"I'm"} button={"Works"} />
      <MenuItem message={"Leon"} button={"Contact"} />
    </div>
  );
};

export default ProfileMenu;
