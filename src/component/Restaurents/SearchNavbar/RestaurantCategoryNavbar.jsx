import React, { useState } from "react";

const categories = [
  "Offers",
  "Burgers",
  "Fries",
  "Snacks",
  "Salads",
  "Cold drinks",
  "Happy Meal®",
  "Desserts",
  "Hot drinks",
  "Sauces",
  "Orbit®",
];

const RestaurantCategoryNavbar = () => {
  const [active, setActive] = useState("Offers");

  return (
    <section className="w-full mt-8">
      <div className="max-w-[1538px] h-[62px] mx-auto bg-[#FC8A06] rounded-sm">

        <div className="h-full flex items-center gap-10 px-20 overflow-x-auto scrollbar-hide">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`whitespace-nowrap transition-all duration-300 font-semibold text-[18px] ${
                active === item
                  ? "bg-[#03081F] text-white rounded-full px-6 py-2"
                  : "text-white hover:text-[#03081F]"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
};

export default RestaurantCategoryNavbar;