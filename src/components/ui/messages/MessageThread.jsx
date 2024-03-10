import MessageBubble from "./MessageBubble";

const MessageThread = () => {
  const messagesList = [
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis accusamus error autem numquam praesentium est voluptate maiores eaque! Quasi officia cum aspernatur dicta dolorum error eius voluptates aperiam aliquam. lorem ipsum dolor sit amet, consectetur adip incididunt",
      id: 1,
    },

    {
      message: "Heyy!",
      id: 2,
    },
    {
      message: "Hello bro",
      id: 3,
    },
  ];
  return (
    <div className="p-3 bg-red-600 h-[calc(100dvh-10.5rem)]">
      {messagesList.map(({ message, id }) => (
        <MessageBubble message={message} key={id} />
      ))}
    </div>
  );
};

export default MessageThread;
