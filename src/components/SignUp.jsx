import Hero from "./ui/Hero";
import Emblem from "./ui/Emblem";
import SignupForm from "./ui/SignupForm";

const SignUp = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <Hero />
      <Emblem />
      <SignupForm />
    </div>
  );
};

export default SignUp;
