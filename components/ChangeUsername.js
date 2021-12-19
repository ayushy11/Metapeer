import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter new Username (current: ${user.getUsername()})`
    );
    if (!username) return;

    setUserData({
      username,
    });
  };
  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-white text-slate-800  bg-gradient-to-b from-amber-200 to-teal-400 rounded-lg font-bold p-5 animate-pulse"
      >
        Change Username
      </button>
    </div>
  );
}

export default ChangeUsername;
