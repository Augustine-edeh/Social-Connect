import * as Icons from "@heroicons/react/24/outline";

const ChatHeader = () => {
  return (
    <header className="flex justify-between bg-purple-600 shadow py-4 px-10 text-white">
      <div className="flex gap-3">
        <Icons.ChevronLeftIcon className="h-8 cursor-pointer" />
        <div className="flex">
          <img src="../../../assets/react.svg" alt="user" />
          <h1 className="text-2xl font-semibold">Sender name</h1>
        </div>
      </div>
      <Icons.MagnifyingGlassIcon className="h-8" />
    </header>
  );
};

export default ChatHeader;
