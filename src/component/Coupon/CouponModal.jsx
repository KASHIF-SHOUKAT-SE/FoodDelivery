import React, { useState } from "react";
import yellowShirtMan from "../../assets/Images/Coupon/Yellow_shirt_man.svg";
import closeIcon from "../../assets/Images/SpecialOffers/meadlDealIcon/Close.svg";
import locationPin from "../../assets/Icons/MapIcon/Previous Location.svg";
import PostCodeSubmitted from "./PostCodeSubmitted";
import OrderNowModal from "./OrderNowModal";
import "./CouponModal.css";

const CouponModal = ({ isOpen, onClose }) => {
  // Postcode ka text store karne ke liye state
  const [postcode, setPostcode] = useState("");

  // Step 2: PostCode Submitted popup show/hide
  const [showSubmitted, setShowSubmitted] = useState(false);

  // Step 3: Order Now popup show/hide
  const [showOrderNow, setShowOrderNow] = useState(false);

  // Agar modal open nahi hai to kuch render mat karo
  if (!isOpen) return null;

  // Find button handler - PostCode Submitted popup kholega
  const handleFind = () => {
    if (postcode.trim()) {
      setShowSubmitted(true); // Step 2 popup open karo
    }
  };

  // "Change" button handler - wapas Step 1 par lao
  const handleChangePostcode = () => {
    setShowSubmitted(false); // Step 2 band karo, Step 1 phir dikhayega
  };

  // Sab band karo - poora flow close
  const handleCloseAll = () => {
    setShowSubmitted(false);
    setShowOrderNow(false);
    setPostcode("");
    onClose(); // Parent ko bhi batao ke band karo
  };

  return (
    <>
      {/* ========== STEP 1: Enter Post Code ========== */}
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 coupon-overlay"
        onClick={handleCloseAll}
      >
        <div
          className="relative w-full max-w-[750px] bg-white rounded-2xl overflow-hidden shadow-2xl flex coupon-modal"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left Image */}
          <div className="hidden md:block w-[320px] flex-shrink-0">
            <img
              src={yellowShirtMan}
              alt="Delivery Person"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center relative">
            {/* Close Button */}
            <button
              onClick={handleCloseAll}
              className="absolute top-4 right-4 w-[45px] h-[45px] rounded-full bg-[#03081F] flex items-center justify-center hover:opacity-80 transition cursor-pointer"
            >
              <img src={closeIcon} alt="Close" className="w-5 h-5 invert" />
            </button>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold text-[#03081F] leading-tight">
              Please Enter Your{" "}
              <span className="underline decoration-[#03081F] underline-offset-4">
                Post Code
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              To start placing a delivery order, please enter your full postcode
              here.
            </p>

            {/* Input + Button */}
            <div className="flex items-center gap-3 mt-6">
              <input
                type="text"
                className="postcode-input flex-1"
                placeholder="eg. AA1 1BB"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />

              <button
                onClick={handleFind}
                className="bg-[#FC8A06] text-white font-bold px-6 py-3 rounded-full hover:bg-[#e07b05] transition cursor-pointer whitespace-nowrap"
              >
                Find
              </button>
            </div>

            {/* Divider */}
            <div className="or-divider mt-6 text-sm text-gray-500">or</div>

            {/* Collect */}
            <p className="text-center mt-4">
              <button
                onClick={() => console.log("Collection mode selected")}
                className="text-[#FC8A06] font-bold text-sm hover:underline cursor-pointer"
              >
                I want to come and collect
              </button>
            </p>

            {/* Location */}
            <div className="flex justify-center mt-6">
              <img
                src={locationPin}
                alt="Location"
                className="w-[100px] h-[100px] opacity-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========== STEP 2: Post Code Submitted ========== */}
      <PostCodeSubmitted
        isOpen={showSubmitted}
        onClose={handleCloseAll}
        postcode={postcode}
        onChangePostcode={handleChangePostcode}
        onOrderNow={() => {
          setShowSubmitted(false);
          setShowOrderNow(true);
        }}
      />

      {/* ========== STEP 3: Order Now ========== */}
      <OrderNowModal
        isOpen={showOrderNow}
        onClose={handleCloseAll}
      />
    </>
  );
};

export default CouponModal;