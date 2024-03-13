import { useEffect, useState } from "react";
import MessageBubble from "./MessageBubble";

const MessageThread = () => {
  const [conversation, setConversation] = useState(null);

  useEffect(() => {
    // Function to fetch conversation data
    const fetchConversationData = async () => {
      try {
        // Simulate fetching data from a JSON file stored locally
        // const response = await fetch(
        //   "../../../../public/store/messagesList.json"
        // );
        const response = await fetch(
          " https://a343ba36-711f-4774-bb2a-077cb59bd0f2.mock.pstmn.io/messages"
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
    // Example of updating conversation data
    const updatedConversationData = { ...conversation };
    updatedConversationData.messages.push({
      message_id: "msg_5",
      sender_id: "user_1",
      timestamp: new Date().toISOString(),
      content: "This is a new message!",
    });
    updateConversation(updatedConversationData);
  };

  return (
    <div className="p-3 bg-red-600 h-[calc(100dvh-10.5rem)] overflow-y-scroll  no-scrollbar">
      {conversation ? (
        <ul>
          {conversation.messages.map((message) => (
            <MessageBubble message={message.content} key={message.message_id} />
          ))}
        </ul>
      ) : (
        <p>Loading messages in this conversation...</p>
      )}

      <button onClick={addNewMessageHandler}>Add Message</button>
    </div>

    // <div>
    //   <h1>Conversation</h1>
    //   {conversation ? (
    //     <ul>
    //       {conversation.messages.map((message) => (
    //         <li key={message.message_id}>
    //           <strong>{message.sender_id}: </strong>
    //           {message.content}
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>Loading messages in this conversation...</p>
    //   )}
    //   <button
    //     onClick={() => {
    //       // Example of updating conversation data
    //       const updatedConversationData = { ...conversation };
    //       updatedConversationData.messages.push({
    //         message_id: "msg_5",
    //         sender_id: "user_1",
    //         timestamp: new Date().toISOString(),
    //         content: "This is a new message!",
    //       });
    //       updateConversation(updatedConversationData);
    //     }}
    //   >
    //     Add Message
    //   </button>
    // </div>
  );
};

export default MessageThread;
