import Login from "./assets/components/pages/Login";
import SignUp from "./assets/components/pages/SignUp";
import { useState } from "react";

const App = () => {
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
      {!isNewUser ? (
        <Login updateIsNewUser={updateIsNewUser} />
      ) : (
        <SignUp updateIsNewUser={updateIsNewUser} />
      )}
    </div>
  );
};

export default App;
