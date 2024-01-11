const Login = () => {
  return (
    <>
      <div className="bg-red-300 h-screen flex flex-col lg:flex-row">
        <section className="bg-red-400 hidden lg:grid lg:w-1/2 place-content-center">
          Hero section
        </section>
        <section className="bg-blue-400 h-full lg:w-1/2 grid place-content-center">
          <h3 className="text-center mb-5">Login</h3>

          <form className="">
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
          </form>
        </section>

        <div>
          <p>
            Don&apos;t have an account?{" "}
            <a className="underline italic text-blue-900">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
