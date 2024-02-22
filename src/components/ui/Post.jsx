import { useNavigate } from "react-router-dom"
import ImgHolder from "../../assets/images/lady.png"
import couple from "../../assets/images/couple.png"
import artwork from "../../assets/images/artwork.png"
import PostIcons from "./PostIcons"

const Post = ({ homePageElements }) => {
    const {
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

/*   to sort image, twitter inspect or flex the image and text and icons
 make header fixed and homepage responsive, move on to next. fix image height issue also*/
  return (
    <div>
        {/* Post container */}
        <div className="shadow-md rounded-[25px] p-[14px] my-[8px] h-full box-border overflow-hidden ">
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
          {/* Post image.*/}
          <img className="h-96 object-fill w-full rounded-2xl" 
            src={artwork} 
            alt="Profile Picture" />
          {/* Post text */}
         <p className="my-[8px]">{postText1}</p>
         <PostIcons homePageElements={homePageElements}/>
        </div>


{/*the rest of this code is just for ui */}
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
          <PostIcons homePageElements={homePageElements}/>
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
          <PostIcons homePageElements={homePageElements}/>
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
          {/* Post image.*/}
          <img className="h-96 object-fill w-full rounded-2xl"
           src={artwork} 
           alt="Profile Picture" />
          {/* Post text */}
         <p className="my-[8px]">{postText2}</p>
          {/* Post actions */}
          <PostIcons homePageElements={homePageElements}/>
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
          <PostIcons homePageElements={homePageElements}/>
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
          {/* Post image.*/}
          <img className="h-96 object-fill w-full rounded-2xl"
            src={couple} 
            alt="Profile Picture" />
          {/* Post text */}
         <p className="my-[8px]">{postText3}</p>
          {/* Post actions */}
          <PostIcons homePageElements={homePageElements}/>
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
          <PostIcons homePageElements={homePageElements}/>
         </div>
    </div>
  )
}

export default Post