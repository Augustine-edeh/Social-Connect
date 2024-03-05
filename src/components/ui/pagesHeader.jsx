import { useNavigate } from "react-router-dom"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'

const PagesHeader = ({ pagename }) => {
  // Hook for navigation within the application
  const navigateTo = useNavigate()

  return (
    <div className="flex shadow-md p-[15px] justify-between ">
        <ChevronLeftIcon 
          className="h-6 w-6 cursor-pointer"
          onClick={() => navigateTo("/Home")} />
        {/* Page name */}
        <h2 className="pl-[10px]"><b>{pagename}</b></h2>
        {/* settings icon */}
        <Cog6ToothIcon className="h-6 w-6 cursor-pointer"
         onClick={() => navigateTo("/Settings")} />                    
    </div>    
  )
}

export default PagesHeader