const Profile = () => {
  const profileImg = "../../assets/images/profile_img.png";

  return (
    <div className="h-screen flex flex-col">
      <section className="grid w-full overflow-clip bg-gray-400 place-content-center place-self-center">
        <img
          src={profileImg}
          className="h-60 w-60 bg-gray-100 rounded-full text-center"
          alt="profile-image"
        />
      </section>
      <section className="bg-gray-200">
        <p className="bg-gray-100 text-2xl text-center font-bold mx-auto py-3 rounded-sm">
          John Doe
        </p>

        <div className="flex gap-0.5">
          <button className="bg-white w-1/3 text-center focus:border-b-8 border-b-violet-700 py-1.5">
            <p className="font-bold">256</p>{" "}
            <p className="font-extralight">posts</p>
          </button>
          <button className="bg-white w-1/3 text-center focus:border-b-8 border-b-violet-700 py-1.5">
            <p className="font-bold">1,1234</p>{" "}
            <p className="font-extralight">followers</p>
          </button>
          <button className="bg-white w-1/3 text-center focus:border-b-8 border-b-violet-700 py-1.5">
            <p className="font-bold">5,678</p>{" "}
            <p className="font-extralight">following</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
