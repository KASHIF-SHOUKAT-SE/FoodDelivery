import ColdDrinkCard from "./ColdDrinkCard";
import { coldDrinksData } from "../../../data/RetaurentData/coldDrinksData";

const ColdDrinksSection = () => {
  return (
    <section className="w-full mt-16">

      <div className="max-w-[1528px] mx-auto px-5">

        {/* Heading */}
        <h2 className="text-[44px] font-bold text-[#FC8A06] mb-10">
          Cold Drinks
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {coldDrinksData.map((drink) => (
            <ColdDrinkCard
              key={drink.id}
              drink={drink}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default ColdDrinksSection;