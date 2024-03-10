const MessageBubble = ({ message }) => {
  return (
    <div className="ml-auto bg-blue-600 my-5 py-3 px-4 rounded-l-2xl rounded-tr-2xl text-white w-fit max-w-screen-xl lg:max-w-xl">
      {message}
    </div>
  );
};

export default MessageBubble;
