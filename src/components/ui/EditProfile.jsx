import ImgHolder from "../../assets/images/lady.png"
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const EditProfile = ({ onClick }) => {
    return (
      <div className="flex shadow-md rounded-[21px] m-[10px] pl-[15px] py-[6px]">
        <img
          className="h-[45px] w-[45px] mr-[15px] rounded-full "
          src={ImgHolder}
          alt="Profile Picture"
        />
        <p className="cursor-pointer flex " /* justify-center */
          onClick={onClick}>
          <b>Edit Profile Information</b>
          <ChevronRightIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => navigateTo("/")} />
        </p>
      </div>
    )
  }
  
  export default EditProfile
  