import * as Icons from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigateTo = useNavigate();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-purple-300">
      <ul className="flex justify-evenly py-3 md:px-24 lg:px-32  relative">
        <li className="w-10 cursor-pointer">
          <Icons.HomeIcon onClick={() => navigateTo("/Home")} />
        </li>
        <li className="w-10 cursor-pointer">
          <Icons.PlusIcon onClick={() => navigateTo("/Notifications")} />
        </li>
        <li className="w-10 cursor-pointer">
          <Icons.EnvelopeIcon onClick={() => navigateTo("/messages")} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
