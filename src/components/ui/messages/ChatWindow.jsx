import ChatHeader from "./ChatHeader";
import MessageThread from "./MessageThread";

import ChatFooter from "./ChatFooter";

const ChatWindow = () => {
  return (
    <div className="relative">
      <ChatHeader />
      <MessageThread />
      <ChatFooter />
    </div>
  );
};

export default ChatWindow;
