import ProfileInfo from "./ProfileMenu";
import ProfilePicture from "./ProfilePicture";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 lg:gap-24 lg:flex-row">
      <ProfilePicture />
      <ProfileInfo />
    </div>
  );
};

export default Profile;
