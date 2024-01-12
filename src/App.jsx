import Login from "./assets/components/pages/Login";
import SignUp from "./assets/components/pages/SignUp";
import { useState } from "react";

const App = () => {
  const [isNewUser, setisNewUser] = useState();
  const updateIsNewUser = (state) => {
    setisNewUser(state);
  };

  return (
    <div className="bg-red-300 h-screen flex flex-col lg:flex-row">
      <section className="bg-black text-white hidden lg:grid lg:w-1/2 place-content-center">
        Hero section
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
