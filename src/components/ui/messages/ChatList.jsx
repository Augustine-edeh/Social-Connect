import * as Icons from "@heroicons/react/24/outline";
import ChatCard from "./ChatCard";
import StartNewChat from "./StartNewChat";

const ChatList = ({ chats }) => {
  return (
    <div className="messages-container mx-auto max-w-screen-md">
      <ul className="messages-list">
        {chats?.length ? (
          chats.map((chat) => <ChatCard chat={chat} key={chat.id} />)
        ) : (
          <StartNewChat />
        )}
      </ul>
    </div>
  );
};

export default ChatList;
