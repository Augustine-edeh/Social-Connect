import * as Icons from "@heroicons/react/24/outline";
import ChatList from "../ui/messages/ChatList";
LoadingMessageUI;
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import LoadingMessageUI from "../ui/messages/LoadingMessageUI";

const Messages = () => {
  const navigateTo = useNavigate();
  const [chats, setChats] = useState();
  const [isLoadingMessages, setIsLoadingMessages] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch(
          "https://a343ba36-711f-4774-bb2a-077cb59bd0f2.mock.pstmn.io/chats"
        );
        const data = await response.json();
        setChats(data.messages);
        setIsLoadingMessages(false);
      } catch (error) {
        setIsLoadingMessages(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="relative bg-white shadow p-4">
        <Icons.ChevronLeftIcon
          className="h-8 absolute cursor-pointer"
          onClick={() => navigateTo("/Home")}
        />
        <h1 className="text-2xl font-semibold text-center">Messages</h1>
      </header>
      <main>
        {isLoadingMessages ? <LoadingMessageUI /> : <ChatList chats={chats} />}
      </main>
    </div>
  );
};

export default Messages;
