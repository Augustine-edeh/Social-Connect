import { useNavigate } from "react-router-dom"
import { BellIcon } from '@heroicons/react/24/outline'

const HomeHeader = ({ homePageElements }) => {
    const {
        greeting,
        appName,
    } = homePageElements

  // Hook for navigation within the application
  const navigateTo = useNavigate();

  return (
    <div>
        {/* Top bar */} {/* sticky top-0 z-50 */}
        <div className="flex flex-row shadow-md p-[15px] text-white justify-between bg-purple-700 ">
            {/* Greeting */}
            <h2 onClick={() => navigateTo("/Settings")}>
                <b>{greeting}</b>
            </h2>
            {/* Application name */}
            <h2><b>{appName}</b></h2>
            {/* Notification bell icon */}
            <BellIcon className="h-6 w-6 cursor-pointer"
                onClick={() => navigateTo("/Notifications")} />
        </div>
    </div>
  )
}

export default HomeHeader