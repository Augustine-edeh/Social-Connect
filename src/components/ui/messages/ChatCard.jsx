import { useNavigate } from "react-router";

const ChatCard = ({ chat }) => {
  const navigateTo = useNavigate();

  return (
    <li
      className="message-item mb-4 p-4 border border-gray-300 rounded-lg"
      onClick={() => {
        navigateTo("/chat", { state: chat });
      }}
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
  );
};

export default ChatCard;
