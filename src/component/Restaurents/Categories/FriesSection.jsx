import FriesCard from "./FriesCard";
import { friesData } from "../../../data/RetaurentData/friesData";

const FriesSection = () => {
  return (
    <section className="w-full mt-16">

      <div className="max-w-[1528px] mx-auto px-5">

        <h2 className="text-[44px] font-bold text-[#FC8A06] mb-10">
          Fries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {friesData.map((fries) => (
            <FriesCard
              key={fries.id}
              fries={fries}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FriesSection;