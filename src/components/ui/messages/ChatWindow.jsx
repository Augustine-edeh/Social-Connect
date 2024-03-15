import ChatHeader from "./ChatHeader";
import MessageThread from "./MessageThread";
import ChatFooter from "./ChatFooter";

const ChatWindow = ({ chatStateProps }) => {
  return (
    <div className="relative">
      <ChatHeader chatStateProps={chatStateProps} />
      <MessageThread />
      <ChatFooter />
    </div>
  );
};

export default ChatWindow;
