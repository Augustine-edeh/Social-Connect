import { useRef } from "react";
import * as Icons from "@heroicons/react/24/outline";

import MessageInput from "./MessageInput";
import SendMessageButton from "./SendMessageButton";

const MessageComposer = () => {
  const messageInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    // alert(messageInputRef.current.value);
    messageInputRef.current.value = "";
  };

  return (
    <form
      className="flex justify-center items-center  bg-purple-300 py-4 px-3 xl:px-20 gap-3 h-[5.5rem]"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        ref={messageInputRef}
        className="w-5/6 bg-purple-400 rounded-xl h-10 px-4 py-6 focus:outline-purple-500"
      />

      <button className="h-fit p-3.5 rounded-full bg-purple-400">
        <Icons.PaperAirplaneIcon className="h-7" />
      </button>

      {/* <MessageInput /> */}
      {/* <SendMessageButton /> */}
    </form>
  );
};

export default MessageComposer;
