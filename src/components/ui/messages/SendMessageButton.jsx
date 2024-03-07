import * as Icons from "@heroicons/react/24/outline";

const SendMessageButton = () => {
  return (
    <button className="h-fit p-3.5 rounded-full bg-purple-400">
      <Icons.PaperAirplaneIcon className="h-7" />
    </button>
  );
};

export default SendMessageButton;
