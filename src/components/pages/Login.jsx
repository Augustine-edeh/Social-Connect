import Hero from "../ui/Hero";
import Emblem from "../ui/Emblem";
import LoginForm from "../ui/LoginForm";

const Login = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <Hero />
      <Emblem />
      <LoginForm />
    </div>
  );
};
export default Login;
