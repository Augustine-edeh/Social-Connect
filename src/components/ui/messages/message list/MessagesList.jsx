const MessageList = ({ messages }) => {
  return (
    <div className="messages-container mx-auto max-w-screen-md">
      <ul className="messages-list">
        {messages.map((message) => (
          <li
            key={message.id}
            className="message-item mb-4 p-4 border border-gray-300 rounded-lg"
          >
            <img
              src={message.sender.avatar}
              alt={message.sender.name + " avatar"}
              className="sender-avatar w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="text-lg">{message.sender.name}</p>
              <p className="text-gray-500 text-sm">
                {new Date(message.timestamp).toLocaleString()}
              </p>
              <p className="message-content mt-2">{message.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
