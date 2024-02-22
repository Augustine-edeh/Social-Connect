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
    postText1,
    postText2,
    postText3,
    commentCount,
    likeCount,
    optionsIcon,
  } = homePageElements

  // Hook for navigation within the application
  const navigateTo = useNavigate();

  return (
    <div>
      {/* Top bar */}
      <div className="flex flex-row shadow-md p-[15px] text-white bg-purple-700">
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
     
      {/* Main content */}
      <div className="m-[7px] text-sm">{/* homepage body div, change font for pc */}
       
        {/* Post container */}
        <div className="shadow-md rounded-[25px] px-[14px] py-[14px] my-[8px]">
          {/* Post header */}
          <div className="flex flex-row justify-content mb-[8px]">
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
            {/* Additional options icon */}
            <p className="order-last cursor-pointer">{optionsIcon}</p>
          </div>
          {/* Post image. img should be original size as posted, so no fixed height  */}
          <img className="h-4/5 w-full rounded-2xl" src={ImgHolder} alt="Profile Picture" />
          {/* Post text */}
         <p className="my-[8px]">{postText1}</p>
          {/* Post actions */}
          <div className="flex flex-row justify-between mt-[15px] mx-[40px]">
            {/* Comment icon and count */}
            <div className="flex gap-x-0.5">
              <ChatBubbleOvalLeftIcon className="h-5 w-5 cursor-pointer" />
              <p>{commentCount}</p>
            </div>
            {/* Like icon and count */}
            <div className="flex gap-x-0.5">
              <HeartIcon 
               className="h-5 w-6 cursor-pointer text-purple-700 fill-current" />
              <p>{likeCount}</p>{/* use state to change icon when clicked? */}
            </div>
            {/* Share icon */}
            <ShareIcon className="h-5 w-6 cursor-pointer" />
            {/* Bookmark icon */}
            <BookmarkIcon className="h-5 w-6 cursor-pointer" />
          </div>
         </div>

       {/* Post container */}
        <div className="shadow-md rounded-[25px] px-[14px] py-[14px] my-[8px]">
          {/* Post header */}
          <div className="flex flex-row justify-content mb-[8px]">
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
            {/* Additional options icon */}
            <p className="order-last cursor-pointer">{optionsIcon}</p>
          </div>
          {/* Post text */}
         <p className="my-[8px]">{postText2}</p>
          {/* Post actions */}
          <div className="flex flex-row justify-between mt-[15px] mx-[40px]">
            {/* Comment icon and count */}
            <div className="flex gap-x-0.5">
              <ChatBubbleOvalLeftIcon className="h-5 w-5 cursor-pointer" />
              <p>{commentCount}</p>
            </div>
            {/* Like icon and count */}
            <div className="flex gap-x-0.5">
              <HeartIcon 
               className="h-5 w-6 cursor-pointer text-purple-700 fill-current" />
              <p>{likeCount}</p>{/* use state to change icon when clicked? */}
            </div>
            {/* Share icon */}
            <ShareIcon className="h-5 w-6 cursor-pointer" />
            {/* Bookmark icon */}
            <BookmarkIcon className="h-5 w-6 cursor-pointer" />
          </div>
         </div>

       {/* Post container */}
        <div className="shadow-md rounded-[25px] px-[14px] py-[14px] my-[8px]">
          {/* Post header */}
          <div className="flex flex-row justify-content mb-[8px]">
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
            {/* Additional options icon */}
            <p className="order-last cursor-pointer">{optionsIcon}</p>
          </div>
          {/* Post text */}
         <p className="my-[8px]">{postText3}</p>
          {/* Post actions */}
          <div className="flex flex-row justify-between mt-[15px] mx-[40px]">
            {/* Comment icon and count */}
            <div className="flex gap-x-0.5">
              <ChatBubbleOvalLeftIcon className="h-5 w-5 cursor-pointer" />
              <p>{commentCount}</p>
            </div>
            {/* Like icon and count */}
            <div className="flex gap-x-0.5">
              <HeartIcon 
               className="h-5 w-6 cursor-pointer text-purple-700 fill-current" />
              <p>{likeCount}</p>{/* use state to change icon when clicked? */}
            </div>
            {/* Share icon */}
            <ShareIcon className="h-5 w-6 cursor-pointer" />
            {/* Bookmark icon */}
            <BookmarkIcon className="h-5 w-6 cursor-pointer" />
          </div>
         </div>

       {/* Post container */}
        <div className="shadow-md rounded-[25px] px-[14px] py-[14px] my-[8px]">
          {/* Post header */}
          <div className="flex flex-row justify-content mb-[8px]">
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
            {/* Additional options icon */}
            <p className="order-last cursor-pointer">{optionsIcon}</p>
          </div>
          {/* Post image. img should be original size as posted, so no fixed height  */}
          <img className="h-4/5 w-full rounded-2xl" src={ImgHolder} alt="Profile Picture" />
          {/* Post text */}
         <p className="my-[8px]">{postText2}</p>
          {/* Post actions */}
          <div className="flex flex-row justify-between mt-[15px] mx-[40px]">
            {/* Comment icon and count */}
            <div className="flex gap-x-0.5">
              <ChatBubbleOvalLeftIcon className="h-5 w-5 cursor-pointer" />
              <p>{commentCount}</p>
            </div>
            {/* Like icon and count */}
            <div className="flex gap-x-0.5">
              <HeartIcon 
               className="h-5 w-6 cursor-pointer text-purple-700 fill-current" />
              <p>{likeCount}</p>{/* use state to change icon when clicked? */}
            </div>
            {/* Share icon */}
            <ShareIcon className="h-5 w-6 cursor-pointer" />
            {/* Bookmark icon */}
            <BookmarkIcon className="h-5 w-6 cursor-pointer" />
          </div>
         </div>

       {/* Post container */}
        <div className="shadow-md rounded-[25px] px-[14px] py-[14px] my-[8px]">
          {/* Post header */}
          <div className="flex flex-row justify-content mb-[8px]">
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
            {/* Additional options icon */}
            <p className="order-last cursor-pointer">{optionsIcon}</p>
          </div>
          {/* Post text */}
         <p className="my-[8px]">{postText1}</p>
          {/* Post actions */}
          <div className="flex flex-row justify-between mt-[15px] mx-[40px]">
            {/* Comment icon and count */}
            <div className="flex gap-x-0.5">
              <ChatBubbleOvalLeftIcon className="h-5 w-5 cursor-pointer" />
              <p>{commentCount}</p>
            </div>
            {/* Like icon and count */}
            <div className="flex gap-x-0.5">
              <HeartIcon 
               className="h-5 w-6 cursor-pointer text-purple-700 fill-current" />
              <p>{likeCount}</p>{/* use state to change icon when clicked? */}
            </div>
            {/* Share icon */}
            <ShareIcon className="h-5 w-6 cursor-pointer" />
            {/* Bookmark icon */}
            <BookmarkIcon className="h-5 w-6 cursor-pointer" />
          </div>
         </div>

       {/* Post container */}
        <div className="shadow-md rounded-[25px] px-[14px] py-[14px] my-[8px]">
          {/* Post header */}
          <div className="flex flex-row justify-content mb-[8px]">
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
            {/* Additional options icon */}
            <p className="order-last cursor-pointer">{optionsIcon}</p>
          </div>
          {/* Post image. img should be original size as posted, so no fixed height  */}
          <img className="h-4/5 w-full rounded-2xl" src={ImgHolder} alt="Profile Picture" />
          {/* Post text */}
         <p className="my-[8px]">{postText3}</p>
          {/* Post actions */}
          <div className="flex flex-row justify-between mt-[15px] mx-[40px]">
            {/* Comment icon and count */}
            <div className="flex gap-x-0.5">
              <ChatBubbleOvalLeftIcon className="h-5 w-5 cursor-pointer" />
              <p>{commentCount}</p>
            </div>
            {/* Like icon and count */}
            <div className="flex gap-x-0.5">
              <HeartIcon 
               className="h-5 w-6 cursor-pointer text-purple-700 fill-current" />
              <p>{likeCount}</p>{/* use state to change icon when clicked? */}
            </div>
            {/* Share icon */}
            <ShareIcon className="h-5 w-6 cursor-pointer" />
            {/* Bookmark icon */}
            <BookmarkIcon className="h-5 w-6 cursor-pointer" />
          </div>
         </div>

       {/* Post container */}
        <div className="shadow-md rounded-[25px] px-[14px] py-[14px] my-[8px]">
          {/* Post header */}
          <div className="flex flex-row justify-content mb-[8px]">
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
            {/* Additional options icon */}
            <p className="order-last cursor-pointer">{optionsIcon}</p>
          </div>
          {/* Post text */}
         <p className="my-[8px]">{postText2}</p>
          {/* Post actions */}
          <div className="flex flex-row justify-between mt-[15px] mx-[40px]">
            {/* Comment icon and count */}
            <div className="flex gap-x-0.5">
              <ChatBubbleOvalLeftIcon className="h-5 w-5 cursor-pointer" />
              <p>{commentCount}</p>
            </div>
            {/* Like icon and count */}
            <div className="flex gap-x-0.5">
              <HeartIcon 
               className="h-5 w-6 cursor-pointer text-purple-700 fill-current" />
              <p>{likeCount}</p>{/* use state to change icon when clicked? */}
            </div>
            {/* Share icon */}
            <ShareIcon className="h-5 w-6 cursor-pointer" />
            {/* Bookmark icon */}
            <BookmarkIcon className="h-5 w-6 cursor-pointer" />
          </div>
         </div>
       
      </div>
    </div>
  )
}

export default HomePage
