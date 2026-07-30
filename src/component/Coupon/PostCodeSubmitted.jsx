import React from "react";
import yellowShirtMan from "../../assets/Images/Coupon/Yellow_shirt_man.svg";
import closeIcon from "../../assets/Images/SpecialOffers/meadlDealIcon/Close.svg";
import locationPin from "../../assets/Icons/MapIcon/Previous Location.svg";
import "./CouponModal.css";

const PostCodeSubmitted = ({ isOpen, onClose, postcode, onChangePostcode, onOrderNow }) => {
  // Agar modal open nahi hai to kuch render mat karo
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 coupon-overlay"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[750px] bg-white rounded-2xl overflow-hidden shadow-2xl flex coupon-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Image - Same yellow shirt man */}
        <div className="hidden md:block w-[320px] flex-shrink-0">
          <img
            src={yellowShirtMan}
            alt="Delivery Person"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Confirmation Content */}
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-center relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-[45px] h-[45px] rounded-full bg-[#03081F] flex items-center justify-center hover:opacity-80 transition cursor-pointer"
          >
            <img src={closeIcon} alt="Close" className="w-5 h-5 invert" />
          </button>

          {/* Heading - "You're All Set!" */}
          <h2 className="text-3xl font-extrabold text-[#03081F] leading-tight">
            You're All Set!
            <br />
            <span className="text-[#029D50]">Post Code</span> Submitted
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            To start placing delivery order, please enter your full postcode
            here
          </p>

          {/* Submitted Postcode + Change Button */}
          <div className="flex items-center gap-3 mt-6">
            {/* Postcode display - read only input style */}
            <div className="postcode-input flex-1 bg-gray-50 text-[#03081F] font-semibold">
              {postcode || "EN4 92F"}
            </div>

            {/* Change Button - dark navy */}
            <button
              onClick={onChangePostcode}
              className="bg-[#03081F] text-white font-bold px-6 py-3 rounded-full hover:bg-[#1a1f3a] transition cursor-pointer whitespace-nowrap"
            >
              Change
            </button>
          </div>

          {/* "We deliver to your area" confirmation */}
          <p className="text-[#029D50] font-bold text-sm mt-4">
            We deliver to your area.
          </p>

          {/* Order Now Button */}
          <button
            onClick={onOrderNow}
            className="w-full bg-[#03081F] text-white font-bold py-4 rounded-full mt-6 hover:bg-[#1a1f3a] transition cursor-pointer text-lg"
          >
            Order Now
          </button>

          {/* Location Pin Icon */}
          <div className="flex justify-center mt-4">
            <img
              src={locationPin}
              alt="Location"
              className="w-[100px] h-[100px] opacity-20"
            />
          </div>

          {/* OR Divider */}
          <div className="or-divider mt-4 text-sm text-gray-500">or</div>

          {/* Collect Option */}
          <p className="text-center mt-4">
            <button
              onClick={() => console.log("Collection mode selected")}
              className="text-[#FC8A06] font-bold text-sm hover:underline cursor-pointer"
            >
              I want to come and collect
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCodeSubmitted;
