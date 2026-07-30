import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import GoogleButton from "./GoogleButton";


const LoginForm = ({ onSignupClick }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-[600px] bg-white p-8 rounded-2xl shadow-xl">

      <h1 className="text-3xl font-bold text-center">
        Welcome Back
      </h1>

      <p className="text-gray-500 text-center mt-2">
        Login to continue
      </p>

      {/* Email */}

      <div className="mt-8">

        <label className="font-semibold">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-2 border rounded-lg p-3 outline-none focus:border-orange-500"
        />

      </div>

      {/* Password */}

      <div className="mt-5">

        <label className="font-semibold">
          Password
        </label>

        <div className="relative mt-2">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full border rounded-lg p-3 pr-12 outline-none focus:border-orange-500"
          />

          <button
            type="button"
            className="absolute right-4 top-4"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>

        </div>

      </div>

      {/* Remember */}

      <div className="flex justify-between mt-5">

        <label className="flex gap-2">

          <input type="checkbox" />

          Remember Me

        </label>

        <button className="text-orange-500">
          Forgot Password?
        </button>

      </div>

      {/* Login */}

      <button
        className="w-full mt-7 bg-[#FC8A06] text-white py-3 rounded-lg hover:bg-orange-600 transition"
      >
        Login
      </button>

      {/* Divider */}

      <div className="flex items-center my-6">

        <div className="flex-1 h-[1px] bg-gray-300"></div>

        <span className="mx-3 text-gray-400">
          OR
        </span>

        <div className="flex-1 h-[1px] bg-gray-300"></div>

      </div>

      <GoogleButton text="Continue with Google" />

      <p className="text-center mt-7">

        Don't have an account?

       <button
          onClick={onSignupClick}
          className="text-orange-500 ml-2 font-semibold"
        >
          Sign Up
        </button>

      </p>

    </div>
  );
};

export default LoginForm;