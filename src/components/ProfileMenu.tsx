"use client";
import { Dispatch, SetStateAction } from "react";
import MenuItem from "./MenuItem";
import useTouchScreenCheck from "@/hooks/useTouchScreenCheck";

type ProfileMenuProp = {
  selectOption: Dispatch<SetStateAction<string>>;
};

const ProfileMenu = ({ selectOption }: ProfileMenuProp) => {
  return (
    <div className="flex flex-col text-center">
      <MenuItem
        message={`Hello${useTouchScreenCheck() ? "" : "."}`}
        button={"About me"}
        selectOption={selectOption}
      />
      <MenuItem message={"I'm"} button={"Works"} selectOption={selectOption} />
      <MenuItem
        message={"Leon"}
        button={"Contact"}
        selectOption={selectOption}
      />
    </div>
  );
};

export default ProfileMenu;
