import MessageInput from "./MessageInput";
import SendMessageButton from "./SendMessageButton";

const MessageComposer = () => {
  return (
    <form className="flex justify-center items-center absolute bottom-0 left-0 right-0 bg-purple-300 py-4 px-3 xl:px-20 gap-3">
      <MessageInput />
      <SendMessageButton />
    </form>
  );
};

export default MessageComposer;
