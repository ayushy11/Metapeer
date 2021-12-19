import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  
  return (
    <div className="bg-black relative text-white">
      <h1>Login</h1>
      <div className="flex flex-col absolute z-50 h-4/5 w-full items-center justify-center space-y-2">
        <Image
          src="https://avatars.githubusercontent.com/u/69115176?v=4"
          width={200}
          height={200}
          className="object-cover rounded-full"
        />
        <button
          onClick={authenticate}
          className="bg-purple-500 rounded-lg font-bold p-5 animate-pulse"
        >
          Login to the Metaverse
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://wallpaperaccess.com/full/2029165.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
