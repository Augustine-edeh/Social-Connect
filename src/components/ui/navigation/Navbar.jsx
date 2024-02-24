import * as Icons from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigateTo = useNavigate();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-purple-300 w-[70dvw] xl:w-[60dvw] rounded-3xl mx-auto my-5">
      <ul className="flex justify-around py-2 px-5">
        <li className="w-9 cursor-pointer">
          <Icons.HomeIcon onClick={() => navigateTo("/Home")} />
        </li>
        <li className="w-9 cursor-pointer">
          <Icons.BellIcon onClick={() => navigateTo("/Notifications")} />
        </li>
        <li className="w-9 cursor-pointer">
          <Icons.EnvelopeIcon onClick={() => navigateTo("/messages")} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
