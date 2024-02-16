import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <section className="bg-[#161616] text-white h-full grid lg:w-1/2 place-content-center">
      <h3 className="text-center mb-5 font-bold text-2xl">Sign Up</h3>

      <form className="flex flex-col gap-8 mt-10">
        <input
          type="text"
          className="rounded-3xl pl-5 pr-16 py-4 bg-[#2E2E2E] md:w-[30rem]"
          placeholder="Enter full Name"
        />
        <input
          type="email"
          className="rounded-3xl pl-5 py-4 bg-[#2E2E2E] md:w-[30rem]"
          placeholder="Enter your email address"
        />
        <input
          type="password"
          className="rounded-3xl pl-5 py-4 bg-[#2E2E2E] md:w-[30rem]"
          placeholder="Enter password"
        />
        <input
          type="password"
          className="rounded-3xl pl-5 py-4 bg-[#2E2E2E] md:w-[30rem]"
          placeholder="Confirm password"
        />
        <button className="bg-white text-black px-3 py-3 rounded-3xl font-extrabold text-lg mt-3">
          Sign Up
        </button>
      </form>

      <p className="text-center mt-5">
        Have an account?{" "}
        <Link to="/login" className="underline italic text-blue-500">
          Log In
        </Link>
      </p>

      <div className="flex gap-10 mt-6 mb-7">
        <hr className="w-1/2" />
        <hr className="w-1/2" />
      </div>
      <button className="bg-white text-black p-3 rounded-3xl font-extrabold text-lg">
        Sign up with Google
      </button>
    </section>
  );
};

export default SignupForm;
