import { useNavigate } from "react-router-dom"
import ImgHolder from "../../../assets/images/lady.png"
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

const PostHeader = ({ homePageElements }) => {
    const {
        userName,
      } = homePageElements  

  // Hook for navigation within the application
  const navigateTo = useNavigate()

  return (
    <div>
         {/* Post header */}
         <div className="flex flex-row mb-[8px] justify-between">
            <div className="flex flex-row ">
              {/* User profile picture */}
              <img
                className="h-[30px] w-[30px] mr-[15px] rounded-full cursor-pointer"
                onClick={() => navigateTo("/profile")}
                src={ImgHolder}
                alt="Profile Picture"
              />
              {/* User name */}
              <p className="cursor-pointer" 
                onClick={() => navigateTo("/profile")}>
                <b>{userName}</b>
              </p>
            </div>
            {/* Additional options icon */}
            <EllipsisVerticalIcon className="h-5 w-5 order-last cursor-pointer" />
          </div>
    </div> 
  )
}
          
export default PostHeader