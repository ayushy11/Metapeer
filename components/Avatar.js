import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username }) {
  const { user, logout } = useMoralis();

  return (
    <Image
      className="bg-black cursor-pointer rounded-full hover:opacity-60"
      src={`https://avatars.dicebear.com/api/gridy/${
        username || user.get("username")
      }.svg`}
      layout="fill"
      onClick={logout}
    />
  );
}

export default Avatar;
