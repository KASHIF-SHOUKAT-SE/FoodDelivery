import BurgerCard from "./BurgerCard";
import { burgersData } from "../../../data/RetaurentData/burgersData";

const BurgersSection = () => {
  return (
    <section className="w-full mt-12">

      <div className="max-w-[1528px] mx-auto px-9">

        {/* Heading */}

        <h2 className="text-[44px] font-bold text-[#03081F] mb-8">
          Burgers
        </h2>

        {/* Desktop */}

        <div className="hidden lg:grid lg:grid-cols-3 gap-6">

          {burgersData.map((burger) => (
            <BurgerCard
              key={burger.id}
              burger={burger}
            />
          ))}

        </div>

        {/* Tablet */}

        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">

          {burgersData.map((burger) => (
            <BurgerCard
              key={burger.id}
              burger={burger}
            />
          ))}

        </div>

        {/* Mobile */}

        <div className="grid md:hidden grid-cols-1 gap-5">

          {burgersData.map((burger) => (
            <BurgerCard
              key={burger.id}
              burger={burger}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default BurgersSection;