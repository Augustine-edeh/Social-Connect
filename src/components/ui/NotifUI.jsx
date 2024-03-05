import ImgHolder from "../../assets/images//lady.png";
import { useNavigate } from "react-router-dom"

const NotifUI = ({ actiondone, useraction }) => {
    // Hook for navigation within the application
  const navigateTo = useNavigate();
  
    return (
        <div>
            <div className="flex items-center justify-between rounded-[20px] p-[6px] pl-[10px] shadow-md mb-2">
                <img className="h-9 w-9 rounded-full "
                    src={ImgHolder} 
                    alt='Profile Picture' />
              {/* find a way to loop these elements in the div from app.jsx, 
              just like you did with hexacolor and numgenerator*/}
              <p className="flex-1 ml-[13px] ">{actiondone}</p>
              <p className="bg-purple-700 text-white px-[10px] py-[1px] cursor-pointer rounded-[20px]"
                onClick={() => navigateTo("/Home")}>
                {useraction}</p>
            </div>
          </div>   
    )
}

export default NotifUI