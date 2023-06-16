import Image from "next/image";

const ProfilePicture = () => {
  return (
    <Image
      src="/images/portrait2.png"
      alt="portrait"
      width={400}
      height={400}
      className="bouncy"
    />
  );
};

export default ProfilePicture;
