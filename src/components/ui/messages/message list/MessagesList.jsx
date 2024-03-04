import * as Icons from "@heroicons/react/24/outline";
const MessageList = ({ chats }) => {
  return (
    <div className="messages-container mx-auto max-w-screen-md">
      <ul className="messages-list">
        {chats?.length ? (
          chats.map((chat) => (
            <li
              key={chat.id}
              className="message-item mb-4 p-4 border border-gray-300 rounded-lg"
            >
              <img
                src={chat.sender.avatar}
                alt={chat.sender.name + " avatar"}
                className="sender-avatar w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="text-lg">{chat.sender.name}</p>
                <p className="text-gray-500 text-sm">
                  {new Date(chat.timestamp).toLocaleString()}
                </p>
                <p className="message-content mt-2">{chat.content}</p>
              </div>
            </li>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-64">
            <h2 className="text-3xl font-bold text-gray-600 mb-4">
              No Messages
            </h2>
            <p className="text-gray-500 mb-4">
              Start a conversation by sending a message.
            </p>
            <button className="flex gap-3 items-center bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600">
              <Icons.ChatBubbleLeftIcon className="h-8" />
              Start a Message
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};

export default MessageList;
