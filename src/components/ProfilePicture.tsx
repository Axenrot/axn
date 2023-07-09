import Image from "next/image";
type ProfilePictureProps = {
  className: string;
};

const ProfilePicture = ({ className }: ProfilePictureProps) => {
  return (
    <>
      <Image
        src="/images/portrait-gray.png"
        alt="portrait"
        width={300}
        height={300}
        className={`bouncy hidden dark:block flex-shrink ${className}`}
      />

      <Image
        src="/images/portrait-carmesim.png"
        alt="portrait"
        width={300}
        height={300}
        className={`bouncy dark:hidden flex-shrink ${className}`}
      />
    </>
  );
};

export default ProfilePicture;
