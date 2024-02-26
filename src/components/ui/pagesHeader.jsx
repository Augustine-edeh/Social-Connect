import { useNavigate } from "react-router-dom"
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

const PagesHeader = ({ pagename }) => {
  // Hook for navigation within the application
  const navigateTo = useNavigate();

  return (
    <div className="flex flex-row shadow-md p-[15px] text-white justify-between bg-purple-700 ">
        <ChevronLeftIcon 
          className="h-6 w-6 cursor-pointer"
          onClick={() => navigateTo("/HomePage")} />
        {/* Page name */}
        <h2 className="pl-[10px]"><b>{pagename}</b></h2>
        {/* Notfication bell icon */}
       {/*  <Setting className="h-6 w-6 cursor-pointer"
         onClick={() => navigateTo("/")} />   */}                  
    </div>    
  )
}

export default PagesHeader