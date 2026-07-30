import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import GoogleButton from "../Login/GoogleButton";
const SignupForm = ({ onLoginClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
        <div className="w-[600px] h-[930px] bg-white p-8 rounded-2xl shadow-xl">


      <h1 className="text-3xl font-bold text-center">
        Create Account
      </h1>

      <p className="text-gray-500 text-center mt-2">
        Create your account to continue
      </p>

      {/* Full Name */}

      <div className="mt-7">
        <label className="font-semibold">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full mt-2 border rounded-lg p-3 outline-none focus:border-orange-500"
        />
      </div>

      {/* Email */}

      <div className="mt-5">
        <label className="font-semibold">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-2 border rounded-lg p-3 outline-none focus:border-orange-500"
        />
      </div>

      {/* Phone */}

      <div className="mt-5">
        <label className="font-semibold">
          Phone Number
        </label>

        <div className="flex gap-3 mt-2">

          <select className="border rounded-lg px-3 outline-none focus:border-orange-500">
            <option>🇵🇰 +92</option>
            <option>🇮🇳 +91</option>
            <option>🇦🇪 +971</option>
            <option>🇺🇸 +1</option>
            <option>🇬🇧 +44</option>
          </select>

          <input
            type="tel"
            placeholder="3001234567"
            className="flex-1 border rounded-lg p-3 outline-none focus:border-orange-500"
          />

        </div>
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
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>

      </div>

      {/* Confirm Password */}

      <div className="mt-5">

        <label className="font-semibold">
          Confirm Password
        </label>

        <div className="relative mt-2">

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
            className="w-full border rounded-lg p-3 pr-12 outline-none focus:border-orange-500"
          />

          <button
            type="button"
            className="absolute right-4 top-4"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>

      </div>

      {/* Terms */}

      <div className="flex items-center gap-2 mt-6">

        <input type="checkbox" />

        <p className="text-sm">
          I agree to the
          <span className="text-orange-500 font-semibold">
            {" "}Terms & Conditions
          </span>
        </p>

      </div>

      {/* Button */}

      <button className="w-full mt-7 bg-[#FC8A06] hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">

        Create Account

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

        Already have an account?

        <button
    onClick={onLoginClick}
    className="ml-2 text-orange-500 font-semibold"
  >
    Login
  </button>

      </p>

    </div>
  );
};

export default SignupForm;