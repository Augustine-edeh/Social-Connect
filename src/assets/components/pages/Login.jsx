const Login = ({ updateIsNewUser }) => {
  const signupHandler = () => {
    updateIsNewUser(true);
  };

  return (
    <>
      <section className="bg-[#242424] text-white h-full lg:w-1/2 grid place-content-center">
        <h3 className="text-center mb-5">Login</h3>

        <form className="flex flex-col px-3">
          <ul className="flex flex-col gap-5">
            <li>
              <label htmlFor="email-L">Email:</label>
              <input type="email" id="email-L" />
            </li>
            <li>
              <label htmlFor="pass-L">Password:</label>
              <input type="password" id="pass-L" />
            </li>
          </ul>
          <button className="bg-blue-700 mt-5 px-3 py-1 rounded">Log In</button>
        </form>

        <div>
          <p className="text-center mt-5">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="underline italic text-blue-500"
              onClick={signupHandler}
            >
              Sign up
            </a>
          </p>
        </div>
      </section>
    </>
  );
};
export default Login;
