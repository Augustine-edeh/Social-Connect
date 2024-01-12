const SignUp = ({ updateIsNewUser }) => {
  const signupHandler = () => {
    updateIsNewUser(false);
  };
  return (
    <section className="bg-[#242424] text-white h-full lg:w-1/2 grid place-content-center">
      <h3 className="text-center mb-5">Sign Up</h3>

      <form className="flex flex-col px-3">
        <ul className="flex flex-col gap-5">
          <li>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </li>
          <li>
            <label htmlFor="pass">Password:</label>
            <input type="password" id="pass" />
          </li>

          <li>
            <label htmlFor="pass2">Confirm Password:</label>
            <input type="password" id="pass2" />
          </li>
        </ul>
        <button className="bg-blue-700 mt-3 px-3 py-1 rounded">Sign Up</button>
      </form>

      <div>
        <p className="text-center mt-5">
          Have an account?{" "}
          <a
            href="#"
            className="underline italic text-blue-500"
            onClick={signupHandler}
          >
            Log In
          </a>
        </p>
      </div>

      <div className="flex place-content-center mt-14 mb-8">
        <p className="w-1/2 h-1 bg-white my-auto" />
        <p className="mx-6">OR</p>
        <p className="w-1/2 h-1 bg-white my-auto" />
      </div>

      <button className="bg-blue-700 rounded px-3 py-2 mt-5">
        Sign up with Google
      </button>
    </section>
  );
};

export default SignUp;
