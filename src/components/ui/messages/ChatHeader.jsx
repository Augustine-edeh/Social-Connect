/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import * as Icons from "@heroicons/react/24/outline";

const ChatHeader = ({ chatStateProps }) => {
  const navigateTo = useNavigate();
  const stateData = {
    userName: chatStateProps.sender.name,
    userAvatar: chatStateProps.sender.avatar,
  };

  return (
    <header className="flex justify-between items-center bg-purple-600 shadow py-4 px-3 text-white h-20">
      <div className="flex items-center gap-4">
        <Icons.ChevronLeftIcon
          className="h-8 cursor-pointer"
          onClick={() => navigateTo("/messages")}
        />
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigateTo("/user-profile", { state: { stateData } })}
        >
          <img
            src={chatStateProps.sender.avatar}
            alt="user"
            className="rounded-full h-12 lg:h-14"
          />
          <h3 className="text-2xl font-semibold">
            {chatStateProps.sender.name}
          </h3>
        </div>
      </div>
      <Icons.MagnifyingGlassIcon className="h-8" />
    </header>
  );
};

export default ChatHeader;
