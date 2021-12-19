import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        user: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-blue-400 border-4">
      <input
        className="flex-grow bg-transparent outline-none text-white placeholder-gray-500 pr-5 "
        type="text"
        placeholder={`Enter a message ${user.getUsername()}...`}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-blue-600"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
