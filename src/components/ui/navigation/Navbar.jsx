import * as Icons from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigateTo = useNavigate();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-purple-300 w-[70dvw] xl:w-[60dvw] rounded-3xl mx-auto my-5">
      <ul className="flex justify-between py-2 px-8 md:px-24 lg:px-32  relative">
        <li className="w-9 cursor-pointer">
          <Icons.HomeIcon onClick={() => navigateTo("/Home")} />
        </li>
        <li className="w-24 h-24 cursor-pointer bg-purple-300 absolute bottom-5 right-0 left-0 mx-auto   rounded-full border-8 border-white/90">
          <Icons.PlusCircleIcon
            onClick={() => navigateTo("/Notifications")}
            className=""
          />
        </li>
        <li className="w-9 cursor-pointer">
          <Icons.EnvelopeIcon onClick={() => navigateTo("/messages")} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
