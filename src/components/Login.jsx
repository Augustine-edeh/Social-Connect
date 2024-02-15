import { Link } from "react-router-dom";

const Login = ({ updateIsNewUser }) => {
  const signupHandler = () => {
    updateIsNewUser(true);
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
      <section className="bg-[#161616] text-white h-full grid lg:w-1/2 place-content-center">
        <div className="text-right w-fit place-content-center fixed top-5 right-5 lg:top-10 lg:right-10">
          <p className="font-extrabold text-2xl lg:text-3xl">SocialCo</p>
          <p className="text-xs lg:text-base">Real-time Chat</p>
        </div>

        <h3 className="text-center text-2xl mb-5 font-extrabold">Log in</h3>
        <p className="text-center">
          Join the communnity and connect with friends
        </p>

        <form className="flex flex-col gap-10 my-10">
          <input
            type="email"
            className="rounded-3xl pl-5 py-4 bg-[#2E2E2E] md:w-[30rem]"
            placeholder="Enter your username"
          />
          <input
            type="password"
            className="rounded-3xl pl-5 py-4 bg-[#2E2E2E] md:w-[30rem]"
            placeholder="Enter your password"
          />
          <button className="bg-white text-black p-3 rounded-3xl font-extrabold text-lg">
            Log In
          </button>
        </form>

        <div>
          <div className="flex gap-10">
            <hr className="w-1/2" />
            <hr className="w-1/2" />
          </div>

          <p className="text-center mt-5">
            Don&apos;t have an account yet?{" "}
            <Link
              to="/signup"
              // href="#"
              className="underline italic text-blue-500"
              onClick={signupHandler}
            >
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};
export default Login;
