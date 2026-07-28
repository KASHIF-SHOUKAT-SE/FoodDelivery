import React, { useState } from 'react';
import { pizzaOptions, heroPizzaImage } from '../../data/SpecialOffer/specialOfferData';
import closeIcon from "../../assets/Icons/SpecialOffer/Minus.svg";
import forwardIcon from "../../assets/Icons/SpecialOffer/Forward Button.svg";
import CustomizePizzaModal from './CustomizePizzaModal';

const SpecialOfferModal = ({ isOpen, onClose }) => {
  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    pizzaOptions.forEach((pizza) => {
      initial[pizza.id] = 1;
    });
    // Hawaiian default 2 (Figma ke mutabiq)
    initial[4] = 2;
    return initial;
  });

  const [selectedId, setSelectedId] = useState(4); // Hawaiian selected by default
  const [showCustomize, setShowCustomize] = useState(false); // Customize Pizza popup state

  if (!isOpen) return null;

  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  const totalPrice = 127.90;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
        <div className="relative w-full max-w-[520px] bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col">

          {/* Hero Pizza Image */}
          <div className="relative w-full h-[180px] flex-shrink-0">
            <img
              src={heroPizzaImage}
              alt="Special Offer Pizza"
              className="w-full h-full object-cover"
            />
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#FC8A06] flex items-center justify-center hover:opacity-90 transition shadow-lg cursor-pointer"
            >
              <img
                src={closeIcon}
                alt="Close"
                className="w-5 h-5"
              />
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="px-6 pt-5 pb-2 flex-shrink-0">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-[#03081F]">Special Offers</span>
              <span className="w-5 h-5 rounded bg-[#FC8A06] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M3.5 2L6.5 5L3.5 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="font-semibold text-[#03081F]">Meal Deal 1</span>
            </div>
            <p className="text-sm text-[#03081F] mt-3">
              Please select your first Pizza
            </p>
          </div>

          {/* Pizza List - Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 pb-2 space-y-3">
            {pizzaOptions.map((pizza) => {
              const isSelected = selectedId === pizza.id;
              return (
                <div
                  key={pizza.id}
                  onClick={() => setSelectedId(pizza.id)}
                  className={`
                    flex items-center justify-between px-4 py-3 rounded-xl border-2 cursor-pointer transition-all
                    ${isSelected
                      ? 'border-[#FC8A06] bg-[#FFF5EB]'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                    }
                  `}
                >
                  {/* Left: Pizza Image + Name */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-50">
                      <img
                        src={pizza.image}
                        alt={pizza.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className={`font-semibold text-base ${isSelected ? 'text-[#FC8A06]' : 'text-[#03081F]'}`}>
                      {pizza.name}
                    </span>
                  </div>

                  {/* Right: Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDecrement(pizza.id);
                      }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition font-bold text-lg cursor-pointer
                        ${isSelected
                          ? 'bg-[#0A1633] text-white hover:bg-[#1a2a4a]'
                          : 'bg-[#FC8A06] text-white hover:opacity-90'
                        }
                      `}
                    >
                      −
                    </button>
                    <span className={`w-10 h-9 flex items-center justify-center font-bold text-base rounded-lg
                      ${isSelected ? 'bg-[#0A1633] text-white' : 'bg-gray-100 text-[#03081F]'}
                    `}>
                      {quantities[pizza.id]}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleIncrement(pizza.id);
                      }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition font-bold text-lg cursor-pointer
                        ${isSelected
                          ? 'bg-[#0A1633] text-white hover:bg-[#1a2a4a]'
                          : 'bg-[#FC8A06] text-white hover:opacity-90'
                        }
                      `}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
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
              Delivery &amp; Tax will be calculated in the next step
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                className="text-[#03081F] font-bold text-sm hover:underline cursor-pointer"
              >
                Take me back
              </button>

              <button
                onClick={() => setShowCustomize(true)}
                className="flex items-center gap-2 bg-[#028643] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#026d36] transition cursor-pointer"
              >
                <img src={forwardIcon} alt="Next" className="w-5 h-5" />
                <span>Next Step</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Customize Pizza Modal - Shows on Next Step click */}
      <CustomizePizzaModal
        isOpen={showCustomize}
        onClose={() => setShowCustomize(false)}
        onNextStep={() => {
          // Future step handling
          console.log('Next step from customize pizza');
        }}
        totalPrice={totalPrice}
      />
    </>
  );
};

export default SpecialOfferModal;