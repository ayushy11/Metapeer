import Head from "next/head";
import { useMoralis } from "react-moralis";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import Messages from "../components/Messages/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-amber-200 to-orange-400 overflow-hidden">
      <Head>
        <title>Metapeer</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
