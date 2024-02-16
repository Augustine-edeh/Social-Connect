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

      <p className="my-5 text-center">or sign up with</p>
      <div className="flex flex-col md:flex-row gap-5">
        <button className="bg-white text-black p-3 w-full md:w-1/2 rounded-2xl font-extrabold text-lg">
          Google
        </button>

        <button className="bg-white text-black p-3 w-full md:w-1/2 rounded-2xl font-extrabold text-lg">
          Email
        </button>
      </div>
      <p className="text-center mt-5">
        Already have an account?{" "}
        <Link to="/login" className="underline italic text-blue-500">
          Log In
        </Link>
      </p>
    </section>
  );
};

export default SignupForm;
