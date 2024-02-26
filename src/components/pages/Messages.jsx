import * as Icons from "@heroicons/react/24/outline";
const Messages = () => {
  const chats = [
    "Abraham",
    "Isaac",
    "Jacob",
    "Peter",
    "James",
    "John",
    "Andrew",
    "Nathaniel",
    "Small James",
    "Judas",
    "Thaddeus",
    "Philip",
    "Simon",
    "Thomas",
  ];
  return (
    <div>
      <h1 className="flex justify-between align-middle bg-purple-700 text-white px-10 xl:px-20 py-2">
        <Icons.ArrowLeftIcon className="w-9" />
        <span className="grid place-content-center font-semibold text-2xl">
          Messages
        </span>
      </h1>

      <ul>
        {chats.map((chat) => (
          <li key={Math.random}>{chat}</li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
