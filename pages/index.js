import Head from "next/head";
import { useMoralis } from "react-moralis";
import Login from "../components/Login/Login";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Metapeer</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <h1>Welcome to the App.</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
