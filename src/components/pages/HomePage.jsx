import ImgHolder from "../../assets/images/ImgHolder.png"

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

  return (
    <div>
      <div className="flex flex-row shadow-md p-[15px] text-white bg-purple-700">
          <h2><b>{greeting}</b></h2>
          <h2><b>{appName}</b></h2>
      </div>
      <div className="m-[10px] ">

        <div className="shadow-md rounded-[25px] px-[14px] py-[14px] my-[20px] ">
          <div className="flex flex-row justify-content mb-[8px] ">
            <img className="h-[30px] w-[30px] mr-[15px] rounded-full "
              src={ImgHolder} 
              alt='Profile Picture'/>
              <p><b>{userName}</b></p>
              <p className='order-last '>{optionsIcon}</p>
          </div>
          {/* img should be original size as posted, so no fixed height  */}
          <img className="h-4/5 w-full "
            src={ImgHolder} 
            alt='Profile Picture'/>
          <p className='my-[8px] '>{postText}</p>
          <div className='flex flex-row mt-[15px] '>
            <p>{commentCount}</p>
            <p className='order-last '>{likeCount}</p>
          </div>  
        </div>
        
      </div>
    </div>
  )
}

export default HomePage