const User2_MessageBubble = ({ message, timeStamp }) => {
  return (
    <div className="mr-auto bg-gray-800 my-5 pt-3 pb-1 px-4 rounded-r-2xl rounded-tl-2xl text-white w-fit max-w-screen-xl lg:max-w-xl">
      <p className="text-base">{message.content}</p>
      <p className="text-xs text-gray-400 mt-2">{timeStamp}</p>
    </div>
  );
};
export default User2_MessageBubble;
