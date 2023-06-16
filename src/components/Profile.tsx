import ProfileInfo from "./ProfileMenu";
import ProfilePicture from "./ProfilePicture";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center w-full sm:justify-around sm:flex-row">
      <ProfilePicture />
      <ProfileInfo />
    </div>
  );
};

export default Profile;
