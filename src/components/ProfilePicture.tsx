import Image from "next/image";
type ProfilePictureProps = {
  className: string;
};

const ProfilePicture = ({ className }: ProfilePictureProps) => {
  return (
    <Image
      src="/images/portrait2.png"
      alt="portrait"
      width={300}
      height={300}
      className={`bouncy flex-shrink ${className}`}
    />
  );
};

export default ProfilePicture;
