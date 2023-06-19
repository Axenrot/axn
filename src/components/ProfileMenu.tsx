"use client";
import { Dispatch, SetStateAction } from "react";
import MenuItem from "./MenuItem";
import useTouchScreenCheck from "@/hooks/useTouchScreenCheck";

type ProfileMenuProp = {
  selectedOption: string;
  selectOption: Dispatch<SetStateAction<string>>;
};

const ProfileMenu = ({ selectOption, selectedOption }: ProfileMenuProp) => {
  return (
    <div
      className={`flex flex-col flex-shrink gap-3 w-4/5 sm:w-1/2 md:w-3/5 lg:1/2 items-center justify-center`}
    >
      <MenuItem
        message={`Hello`}
        button={"About me"}
        selectedOption={selectedOption}
        selectOption={selectOption}
      />
      <MenuItem
        message={"I'm"}
        button={"Works"}
        selectOption={selectOption}
        selectedOption={selectedOption}
      />
      <MenuItem
        message={"Leon"}
        button={"Contact"}
        selectedOption={selectedOption}
        selectOption={selectOption}
      />
    </div>
  );
};

export default ProfileMenu;
