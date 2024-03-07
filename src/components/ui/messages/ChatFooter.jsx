import * as Icons from "@heroicons/react/24/outline";

const ChatFooter = () => {
  return (
    <div className="flex justify-center absolute bottom-0 left-0 right-0 bg-purple-300 py-5 px-3 xl:px-20 gap-3">
      <input type="text" className="w-5/6 bg-purple-400 rounded-xl h-16" />
      <button className="h-fit p-3.5 rounded-full bg-purple-400">
        <Icons.PaperAirplaneIcon className="h-8" />
      </button>
    </div>
  );
};
export default ChatFooter;
