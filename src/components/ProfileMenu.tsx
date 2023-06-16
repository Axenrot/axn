import MenuItem from "./MenuItem";

const ProfileMenu = () => {
  return (
    <div className="flex flex-col text-center">
      <MenuItem message={"Hello."} button={"About me"} />
      <MenuItem message={"I'm"} button={"Work"} />
      <MenuItem message={"Leon"} button={"Contact"} />
    </div>
  );
};

export default ProfileMenu;
