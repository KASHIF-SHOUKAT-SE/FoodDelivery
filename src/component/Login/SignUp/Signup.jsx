import React from "react";
import SignupForm from "./SignupForm";

const Signup = ({ onLoginClick }) => {
  return (
    <section className="min-h-screen  flex items-center justify-center ">
      <SignupForm onLoginClick={onLoginClick} />
    </section>
  );
};

export default Signup;