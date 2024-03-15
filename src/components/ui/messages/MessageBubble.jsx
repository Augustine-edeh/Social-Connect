const MessageBubble = ({ message }) => {
  // Formatting timestamp
  const formattedTimestamp = new Date(message.timestamp).toLocaleString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      month: "short",
      day: "numeric",
    }
  );
  // console.log(message.content);

  return (
    <>
      {message.sender_id === "user_1" ? (
        <div className="ml-auto bg-purple-600 my-5 pt-3 pb-1 px-4 rounded-l-2xl rounded-tr-2xl text-white w-fit max-w-screen-xl lg:max-w-xl">
          <p className="text-base">{message.content}</p>
          <p className="text-xs text-gray-400 mt-2">{formattedTimestamp}</p>
        </div>
      ) : (
        <div className="mr-auto bg-purple-600 my-5 pt-3 pb-1 px-4 rounded-r-2xl rounded-tl-2xl text-white w-fit max-w-screen-xl lg:max-w-xl">
          <p className="text-base">{message.content}</p>
          <p className="text-xs text-gray-400 mt-2">{formattedTimestamp}</p>
        </div>
      )}
    </>
  );
};

export default MessageBubble;
