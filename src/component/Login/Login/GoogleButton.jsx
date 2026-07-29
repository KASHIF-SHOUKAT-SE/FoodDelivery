import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = ({ text }) => {
  return (
    <button
      className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition"
    >
      <FcGoogle size={25} />
      <span className="font-medium ">{text}</span>
    </button>
  );
};

export default GoogleButton;