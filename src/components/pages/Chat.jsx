import { useLocation } from "react-router-dom";
import ChatWindow from "../ui/messages/ChatWindow";

const Chat = () => {
  const chatStateProps = useLocation().state;

  return (
    <main className="relative bg-gray-100 min-h-screen mx-auto max-w-7xl">
      <ChatWindow chatStateProps={chatStateProps} />
    </main>
  );
};

export default Chat;
