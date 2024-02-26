import ImgHolder from "../../assets/images/lady.png"

const EditProfile = ({ onClick }) => {
    return (
      <div className="shadow-md rounded-[21px] m-[10px] pl-[15px] py-[13px]">
        <img
          className="h-[50px] w-[50px] mr-[15px] rounded-full float-left"
          src={ImgHolder}
          alt="Profile Picture"
        />
        <p className="m-0 cursor-pointer"
          onClick={onClick}>
          <b>Edit Profile Information</b>
        </p>
      </div>
    )
  }
  
  export default EditProfile
  