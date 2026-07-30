import React from "react";
import closeIcon from "../../assets/Images/SpecialOffers/meadlDealIcon/Close.svg";
import deliveryScooter from "../../assets/Images/Coupon/Delivery Scooter.svg";
import newStore from "../../assets/Images/Coupon/New Store.svg";
import "./CouponModal.css";

const OrderNowModal = ({ isOpen, onClose }) => {
  // Agar modal open nahi hai to kuch render mat karo
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-4 coupon-overlay"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[500px] bg-white rounded-2xl overflow-hidden shadow-2xl coupon-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-[45px] h-[45px] rounded-full bg-[#03081F] flex items-center justify-center hover:opacity-80 transition cursor-pointer z-10"
        >
          <img src={closeIcon} alt="Close" className="w-5 h-5 invert" />
        </button>

        {/* Content */}
        <div className="p-10 pt-14 flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-[#03081F]">Order Now</h2>

          {/* Subtitle */}
          <p className="text-sm text-gray-500 mt-2">
            Minimum Delivery is <span className="font-bold text-[#03081F]">£10</span>
          </p>

          {/* Deliver my order Button - Dark Navy */}
          <button
            onClick={() => console.log("Deliver my order clicked")}
            className="flex items-center justify-center gap-3 w-[300px] bg-[#03081F] text-white font-bold py-4 px-6 rounded-full mt-8 hover:bg-[#1a1f3a] transition cursor-pointer"
          >
            <img src={deliveryScooter} alt="Delivery" className="w-8 h-8" />
            <span>Deliver my order</span>
          </button>

          {/* I will come & Collect Button - Orange */}
          <button
            onClick={() => console.log("Collection clicked")}
            className="flex items-center justify-center gap-3 w-[300px] bg-[#FC8A06] text-white font-bold py-4 px-6 rounded-full mt-4 hover:bg-[#e07b05] transition cursor-pointer"
          >
            <img src={newStore} alt="Collect" className="w-8 h-8" />
            <span>I will come & Collect</span>
          </button>

          {/* OR Divider */}
          <div className="or-divider mt-6 text-sm text-gray-400 w-full max-w-[300px]">
            or
          </div>

          {/* Cancel & Go back */}
          <p className="mt-4 mb-4">
            <button
              onClick={onClose}
              className="text-[#FC8A06] font-bold text-sm hover:underline cursor-pointer"
            >
              Cancel & Go back
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderNowModal;
