import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigateTo = useNavigate();

  return (
    <section className="bg-[#161616] text-white h-full grid lg:w-1/2 place-content-center">
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
        <button
          className="bg-white text-black p-3 rounded-3xl font-extrabold text-lg"
          onClick={(e) => {
            e.preventDefault();
            navigateTo("/Home");
          }}
        >
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
          <Link to="/signup" className="underline italic text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
