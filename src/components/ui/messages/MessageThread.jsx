import { useEffect, useState } from "react";
import * as Loader from "react-spinners";

import MessageBubble from "./MessageBubble";

const MessageThread = () => {
  const [conversation, setConversation] = useState(null);

  useEffect(() => {
    // Function to fetch conversation data
    const fetchConversationData = async () => {
      try {
        const response = await fetch(
          "https://ee66bbc0-7649-4d1b-a2ef-d35f79f8ccdc.mock.pstmn.io/conversations"
        );
        const data = await response.json();
        setConversation(data);
      } catch (error) {
        console.error("Error fetching conversation data:", error);
      }
    };

    // Fetch conversation data initially
    fetchConversationData();
  }, []);

  // Function to update conversation data
  const updateConversation = async (updatedConversationData) => {
    try {
      // Simulate making a POST request to update the JSON file
      await fetch("/store/updateConversation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedConversationData),
      });

      // Update conversation state after successful update
      setConversation(updatedConversationData);
    } catch (error) {
      console.error("Error updating conversation data:", error);
    }
  };

  const addNewMessageHandler = () => {
    // Code for updating conversation data
    const updatedConversationData = { ...conversation };
    updatedConversationData.messages.push({
      message_id: crypto.randomUUID(),
      sender_id: "user_1",
      timestamp: new Date().toISOString(),
      content: "This is a new message!",
    });
    updateConversation(updatedConversationData);
  };

  return (
    <div className="p-3 bg-purple-300/85 h-[calc(100dvh-10.5rem)] overflow-y-scroll  no-scrollbar">
      {conversation ? (
        <ul>
          {conversation.messages.map((message) => (
            <MessageBubble message={message} key={message.message_id} />
          ))}
          <button
            onClick={addNewMessageHandler}
            className="bg-blue-600 rounded text-white mt-5 p-2"
          >
            Add Message
          </button>
        </ul>
      ) : (
        <>
          <Loader.BarLoader
            className="mx-auto mt-72 mb-10"
            color={"purple"}
            loading={true}
            // cssOverride={override}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p className="text-center">
            Loading messages in this conversation...
          </p>
        </>
      )}
    </div>
  );
};

export default MessageThread;
