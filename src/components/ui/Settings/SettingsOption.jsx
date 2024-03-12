import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useNavigate } from "react-router-dom"

const SettingsOption = ({ title, onClick }) => {
   // Hook for navigation within the application
   const navigateTo = useNavigate()
   
  return (
    <div>
      <p className="py-[20px] pl-[21px] pr-[31px] border-b-2 cursor-pointer 
        flex justify-between " 
        onClick={onClick}>
        <b>{title}</b>
        <ChevronRightIcon
          className="h-6 w-6 cursor-pointer"
          onClick={onClick} />
      </p>
    </div>
  )
}

export default SettingsOption
