const SignOutBtn = ({onClick }) => {
    return (
      <div>
        <p className="shadow-md m-[10px] py-[15px] mb-[43px] rounded-[21px] cursor-pointer text-center"
          onClick={onClick}>
          <b>Sign Out</b>
        </p>
      </div>
    )
  }
  
  export default SignOutBtn
  