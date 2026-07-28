import React, { useState } from 'react';
import closeIcon from '../../assets/Icons/SpecialOffer/Minus.svg';
import forwardIcon from '../../assets/Icons/SpecialOffer/Forward Button.svg';
import pizzaIcon from '../../assets/Images/Customise Pizza/Ellipse 6.svg';
import heroBanner from '../../assets/Images/restaurent/SpecialOffer/Rectangle 53.svg';
import './InstructionsModal.css';

const InstructionsModal = ({ isOpen, onClose, onAdd, totalPrice = 127.9 }) => {
  const [instructions, setInstructions] = useState('');
  if (!isOpen) return null;
  const handleAdd = () => {
    if (onAdd) {
      onAdd(instructions);
    }
  };
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-4 instructions-overlay">
      <div className="relative w-full max-w-[520px] bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col instructions-modal">
        {/* ============ SECTION 1: Hero Image ============ */}
        <div className="relative w-full h-[180px] flex-shrink-0">
          <img
            src={heroBanner}
            alt="Special Instructions"
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#FC8A06] flex items-center justify-center hover:opacity-90 transition shadow-lg cursor-pointer"
          >
            <img src={closeIcon} alt="Close" className="w-5 h-5" />
          </button>
        </div>
        {/* ============ SECTION 2: Breadcrumb + Title + Info ============ */}
        <div className="px-6 pt-5 pb-4 flex-shrink-0">
          {/* Breadcrumb - 4 levels */}
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <span className="font-semibold text-[#03081F]">Special Offers</span>
            {/* Orange Arrow */}
            <span className="w-5 h-5 rounded bg-[#FC8A06] flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M3.5 2L6.5 5L3.5 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-semibold text-[#03081F]">Meal Deal 1</span>
            <span className="w-5 h-5 rounded bg-[#FC8A06] flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M3.5 2L6.5 5L3.5 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-semibold text-[#03081F]">Customise Pizza 1</span>
            <span className="w-5 h-5 rounded bg-[#FC8A06] flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M3.5 2L6.5 5L3.5 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-semibold text-[#03081F]">Instructions</span>
          </div>
          {/* Title */}
          <p className="text-base font-semibold text-[#03081F] mt-3">
            Customise your chicken Pizza
          </p>
          {/* Info Line with Pizza Icon */}
          <div className="flex items-center gap-3 mt-3">
            <img
              src={pizzaIcon}
              alt="Pizza"
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />
            <p className="text-lg font-bold text-[#FC8A06]">
              Add your special request
            </p>
          </div>
        </div>
        {/* ============ SECTION 3: Textarea ============ */}
        <div className="flex-1 px-6 pb-4">
          <textarea
            className="instructions-textarea"
            placeholder="Write your special instructions here.."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            maxLength={500}
          />
        </div>
        {/* ============ SECTION 4: Footer ============ */}
        <div className="px-6 pt-3 pb-5 flex-shrink-0 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#FC8A06] text-white text-sm font-bold px-4 py-2 rounded-lg">
              Total to pay
            </span>
            <span className="text-[#03081F] font-bold text-xl">
              £{totalPrice.toFixed(2)}
            </span>
          </div>
          <p className="text-xs text-gray-400 mb-4">
            Delivery & Tax will be calculated in the next step
          </p>
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-[#03081F] font-bold text-sm hover:underline cursor-pointer"
            >
              Take me back
            </button>
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 bg-[#028643] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#026d36] transition cursor-pointer"
            >
              <img src={forwardIcon} alt="Add" className="w-5 h-5" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstructionsModal;