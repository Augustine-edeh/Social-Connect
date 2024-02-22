import ImgHolder from "../../assets/images/ImgHolder.png"
import { /* Link, */ useNavigate } from "react-router-dom"
import { BellIcon } from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { ShareIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/outline'

 /* if there's notification, icon/color changes*/
const HomePage = ({ homePageElements }) => {
  const {
    greeting,
    appName,
    userName,
    postText,
    commentCount,
    likeCount,
    optionsIcon,
  } = homePageElements

  const navigateTo = useNavigate();

  return (
    <div>
      <div className="flex flex-row shadow-md p-[15px] text-white bg-purple-700">
          <h2 onClick={() => navigateTo("/Settings")}
           <b>{greeting}</b></h2>
          <h2><b>{appName}</b></h2>
          <BellIcon className="h-6 w-6 cursor-pointer "
            onClick={() => navigateTo("/Notifiations")} />
      </div>

      <div className="m-[7px] text-sm "> {/* homepage body div, change font for pc */}

        <div className="shadow-md rounded-[25px] px-[14px] py-[14px] my-[8px] ">
          <div className="flex flex-row justify-content mb-[8px] ">
            <img className="h-[30px] w-[30px] mr-[15px] rounded-full cursor-pointer "
              onClick={() => navigateTo("/profile")}
              src={ImgHolder} 
              alt='Profile Picture'/>
              <p className="cursor-pointer "
                onClick={() => navigateTo("/profile")}>
                <b>{userName}</b>
              </p>
              <p className='order-last cursor-pointer '>{optionsIcon}</p>
          </div>
          {/* img should be original size as posted, so no fixed height  */}
          <img className="h-4/5 w-full rounded-2xl "
            src={ImgHolder} 
            alt='Profile Picture'/> 
          <p className='my-[8px] '>{postText}</p>
          <div className='flex flex-row justify-between mt-[15px] mx-[40px]'>
            <div className='flex gap-x-0.5 '>
              <ChatBubbleOvalLeftIcon className="h-5 w-5 cursor-pointer " />
              <p>{commentCount}</p>
            </div>
            <div className='flex gap-x-0.5 '>
              <HeartIcon className="h-5 w-6 cursor-pointer text-purple-700 fill-current " />
              <p className=' '>{likeCount}</p>{/* use state to change icon when clicked? */}
            </div>
            <ShareIcon className="h-5 w-6 cursor-pointer " />
            <BookmarkIcon className="h-5 w-6 cursor-pointer " />
          </div>  
        </div>

        <div className="shadow-md rounded-[25px] px-[14px] py-[14px] my-[8px] ">
          <div className="flex flex-row justify-content mb-[8px] ">
            <img className="h-[30px] w-[30px] mr-[15px] rounded-full cursor-pointer "
              onClick={() => navigateTo("/profile")}
              src={ImgHolder} 
              alt='Profile Picture'/>
              <p className="cursor-pointer "
                onClick={() => navigateTo("/profile")}>
                <b>{userName}</b>
              </p>
              <p className='order-last cursor-pointer '>{optionsIcon}</p>
          </div>         
          <p className='my-[8px] '>{postText}</p>
          <div className='flex flex-row mt-[15px] '>
            <ChatBubbleOvalLeftIcon className="h-6 w-6 cursor-pointer " />
            <p>{commentCount}</p>
            <HeartIcon className="h-6 w-6 cursor-pointer text-purple-700 fill-current " />
            <p className=' '>{likeCount}</p>{/* use state to change icon when clicked? */}
            <ShareIcon className="h-6 w-6 cursor-pointer " />
            <BookmarkIcon className="h-6 w-6 cursor-pointer " />
          </div>  
        </div>

        <div className="shadow-md rounded-[25px] px-[14px] py-[14px] my-[8px] ">
          <div className="flex flex-row justify-content mb-[8px] ">
            <img className="h-[30px] w-[30px] mr-[15px] rounded-full cursor-pointer "
              onClick={() => navigateTo("/profile")}
              src={ImgHolder} 
              alt='Profile Picture'/>
              <p className="cursor-pointer "
                onClick={() => navigateTo("/profile")}>
                <b>{userName}</b>
              </p>
              <p className='order-last cursor-pointer '>{optionsIcon}</p>
          </div>
          {/* img should be original size as posted, so no fixed height  */}
          <p className='my-[8px] '>{postText}</p>
          <div className='flex flex-row mt-[15px] '>
            <ChatBubbleOvalLeftIcon className="h-6 w-6 cursor-pointer " />
            <p>{commentCount}</p>
            <HeartIcon className="h-6 w-6 cursor-pointer " />
            <p className=' '>{likeCount}</p>{/* use state to change icon when clicked? */}
            <ShareIcon className="h-6 w-6 cursor-pointer " />
            <BookmarkIcon className="h-6 w-6 cursor-pointer " />
          </div>  
        </div>
        
      </div>
    </div>
  )
}

export default HomePage
