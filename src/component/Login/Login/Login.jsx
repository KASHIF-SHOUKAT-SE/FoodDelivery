import React from "react";
import LoginForm from "./LoginForm";

const Login = ({ onSignupClick }) => {
  return (
    <section className="min-h-screen  flex items-center justify-center px-4 ">
      <LoginForm onSignupClick={onSignupClick} />
    </section>
  );
};

export default Login;






