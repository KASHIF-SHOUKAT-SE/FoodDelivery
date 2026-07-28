import React, { useState } from 'react';
import {
  toppingCategories,
  customizePizzaHeroImage,
  smallPizzaIcon,
  MAX_FREE_TOPPINGS,
  defaultSelectedToppings,
} from '../../data/SpecialOffer/customizePizzaData';
import closeIcon from '../../assets/Icons/SpecialOffer/Minus.svg';
import forwardIcon from '../../assets/Icons/SpecialOffer/Forward Button.svg';
import './CustomizePizzaModal.css';
// ✅ YAHAN ADD KIYA #1: InstructionsModal component import kiya
// Ye wahi popup hai jo "Next Step" click karne par khulay ga
import InstructionsModal from './InstructionsModal';

const CustomizePizzaModal = ({ isOpen, onClose, onNextStep, totalPrice = 127.9 }) => {
  // Default selected toppings from data file (Figma ke mutabiq)

  // ✅ YAHAN ADD KIYA #2: Instructions popup ko control karne ke liye state
  // false = popup band, true = popup khula
  const [showInstructions, setShowInstructions] = useState(false);


  const [selectedToppings, setSelectedToppings] = useState(
    () => new Set(defaultSelectedToppings)
  );

  if (!isOpen) return null;

  const selectedCount = selectedToppings.size;

  const handleToggleTopping = (toppingId) => {
    setSelectedToppings((prev) => {
      const next = new Set(prev);
      if (next.has(toppingId)) {
        // Uncheck: always allowed
        next.delete(toppingId);
      } else if (next.size < MAX_FREE_TOPPINGS) {
        // Check: only if under limit
        next.add(toppingId);
      }
      // Agar 4 already selected hain, naya add nahi hoga
      return next;
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 customize-pizza-overlay">
      <div className="relative w-full max-w-[520px] bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col customize-pizza-modal">

        {/* ============ SECTION 1: Hero Image ============ */}
        <div className="relative w-full h-[180px] flex-shrink-0">
          <img
            src={customizePizzaHeroImage}
            alt="Customise Pizza"
            className="w-full h-full object-cover"
          />
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#FC8A06] flex items-center justify-center hover:opacity-90 transition shadow-lg cursor-pointer"
          >
            <img src={closeIcon} alt="Close" className="w-5 h-5" />
          </button>
        </div>

        {/* ============ SECTION 2: Breadcrumb + Title + Info ============ */}
        <div className="px-6 pt-5 pb-2 flex-shrink-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <span className="font-semibold text-[#03081F]">Special Offers</span>
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
          </div>

          {/* Title + Counter */}
          <div className="flex items-center justify-between mt-3">
            <p className="text-base font-semibold text-[#03081F]">
              Customise your chicken Pizza
            </p>
            <span className="text-sm font-medium text-gray-500">
              {selectedCount}/{MAX_FREE_TOPPINGS} Selected
            </span>
          </div>

          {/* Info Line with Pizza Icon */}
          <div className="flex items-center gap-3 mt-3">
            <img
              src={smallPizzaIcon}
              alt="Pizza"
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />
            <p className="text-lg font-bold text-[#FC8A06]">
              Please select up to {MAX_FREE_TOPPINGS} options free!
            </p>
          </div>
        </div>

        {/* ============ SECTION 3: Topping Categories (Scrollable) ============ */}
        <div className="flex-1 overflow-y-auto px-6 pb-2 space-y-4 toppings-scroll">
          {toppingCategories.map((category) => (
            <div key={category.id} className="topping-category">
              {/* Category Header: Icon + Badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[45px] h-[45px] rounded-full overflow-hidden flex-shrink-0 border-2 border-dashed border-[#FC8A06] flex items-center justify-center bg-white">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <span className="bg-[#03081F] text-white text-sm font-bold px-4 py-2 rounded-lg">
                  {category.name}
                </span>
              </div>

              {/* Toppings Grid (3 columns) */}
              <div className="grid grid-cols-3 gap-x-4 gap-y-3">
                {category.toppings.map((topping) => {
                  const isChecked = selectedToppings.has(topping.id);
                  const isDisabled = !isChecked && selectedCount >= MAX_FREE_TOPPINGS;

                  return (
                    <label
                      key={topping.id}
                      className={`flex items-center gap-2 cursor-pointer select-none ${
                        isDisabled ? 'opacity-40 cursor-not-allowed' : ''
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        checked={isChecked}
                        disabled={isDisabled}
                        onChange={() => handleToggleTopping(topping.id)}
                      />
                      <span className="text-sm font-medium text-[#03081F]">
                        {topping.name}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ============ SECTION 4: Footer ============ */}
        <div className="px-6 pt-3 pb-5 flex-shrink-0 border-t border-gray-100">
          {/* Total Price */}
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

          {/* Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-[#03081F] font-bold text-sm hover:underline cursor-pointer"
            >
              Take me back
            </button>

            {/* ✅ YAHAN CHANGE KIYA #3: "Next Step" button ka onClick ab
                Instructions popup ko open karta hai (setShowInstructions(true))
                Pehle ye onNextStep prop call karta tha */}
            <button
              onClick={() => setShowInstructions(true)}
              className="flex items-center gap-2 bg-[#028643] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#026d36] transition cursor-pointer"
            >
              <img src={forwardIcon} alt="Next" className="w-5 h-5" />
              <span>Next Step</span>
            </button>
          </div>
        </div>

      </div>

      {/* ✅ YAHAN ADD KIYA #4: InstructionsModal component render kiya
          - isOpen: showInstructions state se control hota hai
          - onClose: "Take me back" ya X button par popup band karta hai
          - onAdd: "Add" button par user ka likha hua text milta hai aur popup band hota hai
          - totalPrice: same price jo is popup me dikh rahi hai wo Instructions popup me bhi dikhegi */}
      <InstructionsModal
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
        onAdd={(text) => {
          console.log('Special instructions:', text);
          setShowInstructions(false);
        }}
        totalPrice={totalPrice}
      />

    </div>
  );
};

export default CustomizePizzaModal;
