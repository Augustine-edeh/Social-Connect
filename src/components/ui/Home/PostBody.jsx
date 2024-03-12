import ImgHolder from "../../../assets/images/lady.png"
import couple from "../../../assets/images/couple.png"
import artwork from "../../../assets/images/artwork.png"

const PostBody = ({ homePageElements }) => {
    const {
        postText1,
        postText2,
        postText3,
      } = homePageElements  

  // Hook for navigation within the application
  const navigateTo = useNavigate()

/*   to sort image, twitter inspect or flex the image and text and icons
 make header fixed and homepage responsive, fix image height issue also*/
  return (
    <div>
        {/* Post container */}
        <div className="shadow-md rounded-[25px] p-[14px] my-[8px] h-full box-border overflow-hidden ">
          {/* Post image.*/}
          <img className="h-96 object-fill w-full rounded-2xl" 
            src={artwork} 
            alt="Profile Picture" />
          {/* Post text */}
         <p className="my-[8px]">{postText1}</p>
        </div>
        </div>
  )
}

export default PostBody