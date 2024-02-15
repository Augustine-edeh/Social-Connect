import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";
const Home = () => {
  const [isNewUser, setisNewUser] = useState();
  const updateIsNewUser = (state) => {
    setisNewUser(state);
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <section className="bg-[#82182C] text-white hidden lg:grid lg:w-1/2 place-content-center">
        <img src="" alt="vector-img" />

        <p className="text-center font-extrabold text-3xl">
          SocialConnect brings
          <br />
          people together.
        </p>
        <p className="text-center">
          Stay connected with friends and followers, share your
          <br />
          moments in one place.
        </p>
      </section>
      {/* {!isNewUser ? (
        <Login updateIsNewUser={updateIsNewUser} />
      ) : (
        <SignUp updateIsNewUser={updateIsNewUser} />
      )} */}
      {/* <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </> */}
    </div>
  );
};

export default Home;
