import { useLocation } from "react-router-dom";
import * as Icons from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const navigateTo = useNavigate();
  const { userName, userAvatar } = useLocation().state.stateData;

  return (
    <div className="min-h-screen flex flex-col relative">
      <Icons.ChevronLeftIcon
        className="h-8 w-fit absolute top-4 left-2 hover:bg-gray-500/70 rounded text-white"
        onClick={() => navigateTo("/Home")}
      />
      <section className="grid w-full overflow-clip bg-gray-400 place-content-center place-self-center">
        <img
          src={userAvatar}
          className="h-60 w-60 bg-gray-100 rounded-full text-center"
          alt="profile-image"
        />
      </section>
      <section className="bg-gray-200">
        <p className="bg-gray-100 text-2xl text-center font-bold mx-auto py-3 rounded-sm">
          {userName}
        </p>

        <div className="flex gap-0.5">
          <button className="bg-white w-1/3 text-center focus:border-b-8 border-b-violet-700 py-1.5">
            <p className="font-bold">256</p>{" "}
            <p className="font-extralight">posts</p>
          </button>
          <button className="bg-white w-1/3 text-center focus:border-b-8 border-b-violet-700 py-1.5">
            <p className="font-bold">1,1234</p>{" "}
            <p className="font-extralight">followers</p>
          </button>
          <button className="bg-white w-1/3 text-center focus:border-b-8 border-b-violet-700 py-1.5">
            <p className="font-bold">5,678</p>{" "}
            <p className="font-extralight">following</p>
          </button>
        </div>
      </section>
    </div>
  );
};
export default UserProfile;
