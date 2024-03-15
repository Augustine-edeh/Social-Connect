import User1_MessageBubble from "./User1_MessageBubble";
import User2_MessageBubble from "./User2_MessageBubble";

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
        <User1_MessageBubble message={message} timeStamp={formattedTimestamp} />
      ) : (
        <User2_MessageBubble message={message} timeStamp={formattedTimestamp} />
      )}
    </>
  );
};

export default MessageBubble;
