const User1_MessageBubble = ({ message, timeStamp }) => {
  return (
    <div className="ml-auto bg-purple-600 my-5 pt-3 pb-1 px-4 rounded-l-2xl rounded-tr-2xl text-white w-fit max-w-screen-xl lg:max-w-xl">
      <p className="text-base">{message.content}</p>
      <p className="text-xs text-gray-400 mt-2">{timeStamp}</p>
    </div>
  );
};

export default User1_MessageBubble;
