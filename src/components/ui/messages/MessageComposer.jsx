import { useRef, useState } from "react";
import * as Icons from "@heroicons/react/24/outline";

import MessageInput from "./MessageInput";
import SendMessageButton from "./SendMessageButton";

const MessageComposer = () => {
  let [messageValue, setMessageValue] = useState("");

  const messageInputRef = useRef();

  const changeHandler = () => {
    setMessageValue(messageInputRef.current.value);
    // console.log(messageValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // TODO: handle create Message-Bubble function upon submission of MessageComposer form

    setMessageValue("");
  };

  return (
    <form
      className="flex justify-center items-center  bg-purple-300 py-4 px-3 xl:px-20 gap-3 h-[5.5rem]"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        ref={messageInputRef}
        value={messageValue}
        onChange={changeHandler}
        className="w-5/6 bg-purple-400 rounded-xl h-10 px-4 py-6 focus:outline-purple-500"
      />

      <button
        className="h-fit p-3.5 rounded-full bg-purple-400 disabled:bg-purple-400/45 disabled:text-gray-600"
        disabled={messageValue.trim().length < 1}
      >
        <Icons.PaperAirplaneIcon className="h-7" />
      </button>

      {/* <MessageInput /> */}
      {/* <SendMessageButton /> */}
    </form>
  );
};

export default MessageComposer;
