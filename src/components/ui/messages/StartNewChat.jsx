import * as Icons from "@heroicons/react/24/outline";

const StartNewChat = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <h2 className="text-3xl font-bold text-gray-600 mb-4">No Messages</h2>
      <p className="text-gray-500 mb-4">
        Start a conversation by sending a message.
      </p>
      <button className="flex gap-3 items-center bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600">
        <Icons.ChatBubbleLeftIcon className="h-8" />
        Start a Message
      </button>
    </div>
  );
};

export default StartNewChat;
