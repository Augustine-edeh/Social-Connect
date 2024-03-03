import * as Icons from "@heroicons/react/24/outline";
import MessageList from "../ui/message list/MessageList";
const Messages = () => {
  const messages = [
    // Mock messages data here
    {
      id: 1,
      sender: {
        id: 101,
        name: "John Doe",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
      },
      timestamp: "2024-03-02T10:15:00Z",
      content: "Hey there! How are you doing?",
      read: true,
    },
    {
      id: 2,
      sender: {
        id: 102,
        name: "Jane Smith",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
      },
      timestamp: "2024-03-02T10:17:30Z",
      content: "Hi John! I'm doing well, thanks for asking.",
      read: false,
    },
    {
      id: 3,
      sender: {
        id: 101,
        name: "John Doe",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
      },
      timestamp: "2024-03-02T10:20:45Z",
      content: "Glad to hear that! Did you finish the project?",
      read: false,
    },
    {
      id: 4,
      sender: {
        id: 103,
        name: "Alice Johnson",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
      },
      timestamp: "2024-03-02T10:25:10Z",
      content: "Hey everyone! What's up?",
      read: true,
    },
    {
      id: 5,
      sender: {
        id: 102,
        name: "Jane Smith",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
      },
      timestamp: "2024-03-02T10:30:20Z",
      content: "Just finished a meeting. What's new?",
      read: true,
    },
    {
      id: 6,
      sender: {
        id: 101,
        name: "John Doe",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
      },
      timestamp: "2024-03-02T10:35:40Z",
      content: "Not much, just catching up on some work.",
      read: false,
    },
    {
      id: 7,
      sender: {
        id: 104,
        name: "David Brown",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
      },
      timestamp: "2024-03-02T10:40:55Z",
      content: "Hey folks! Anyone free for a quick call?",
      read: false,
    },
    {
      id: 8,
      sender: {
        id: 103,
        name: "Alice Johnson",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
      },
      timestamp: "2024-03-02T10:45:12Z",
      content: "I'm available. What's the agenda?",
      read: true,
    },
    {
      id: 9,
      sender: {
        id: 105,
        name: "Michael Lee",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
      },
      timestamp: "2024-03-02T10:50:30Z",
      content: "Count me in too!",
      read: true,
    },
    {
      id: 10,
      sender: {
        id: 106,
        name: "Sarah Green",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
      },
      timestamp: "2024-03-02T10:55:45Z",
      content: "Sorry, I'm busy right now. Maybe later.",
      read: false,
    },
    {
      id: 11,
      sender: {
        id: 104,
        name: "David Brown",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
      },
      timestamp: "2024-03-02T11:00:00Z",
      content: "No problem, Sarah. We can reschedule.",
      read: false,
    },
    {
      id: 12,
      sender: {
        id: 107,
        name: "Emily Clark",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
      },
      timestamp: "2024-03-02T11:05:20Z",
      content: "Hey everyone! What are you all up to?",
      read: true,
    },
    {
      id: 13,
      sender: {
        id: 102,
        name: "Jane Smith",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
      },
      timestamp: "2024-03-02T11:10:35Z",
      content: "Just grabbing some lunch. How about you?",
      read: false,
    },
    {
      id: 14,
      sender: {
        id: 106,
        name: "Sarah Green",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
      },
      timestamp: "2024-03-02T11:15:50Z",
      content: "I'm working on the new project proposal.",
      read: false,
    },
    {
      id: 15,
      sender: {
        id: 105,
        name: "Michael Lee",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
      },
      timestamp: "2024-03-02T11:20:00Z",
      content: "Just finished a meeting. Catching up on emails now.",
      read: true,
    },
    {
      id: 16,
      sender: {
        id: 108,
        name: "Sophia Taylor",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
      },
      timestamp: "2024-03-02T11:25:15Z",
      content: "Hey folks! Anyone want to join for a coffee break?",
      read: false,
    },
    {
      id: 17,
      sender: {
        id: 109,
        name: "Matthew White",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
      },
      timestamp: "2024-03-02T11:30:30Z",
      content: "Count me in, Sophia! I could use a break.",
      read: true,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-semibold text-center">Chat App</h1>
      </header>
      <main>
        <MessageList messages={messages} />
      </main>
    </div>
  );
};

export default Messages;
