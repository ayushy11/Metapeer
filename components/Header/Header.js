import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "../Avatar";
import ChangeUsername from "../ChangeUsername";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 p-5 z-50 shadow-sm text-purple-500 border-b-4 border-green-400 bg-slate-900">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            className="object-cover rounded-full"
            src="https://avatars.githubusercontent.com/u/69115176?v=4"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center ">
          <div className="h-48 w-48 relative lg:mx-auto border-green-400 border-8 rounded-full">
            <Avatar />
          </div>
          <h1 className="text-3xl">Welcome to Metapeer</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
