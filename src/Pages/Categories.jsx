import offers from "../data/offers";
import OfferCard from "./OfferCard";

const Categories = () => {
  return (
    <section className="max-w-[1528px] mx-auto mt-[-160px] px-4">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Left */}
        <h2 className="text-[32px] font-bold text-[#03081F]">
          Up to -40% 🎉 Order.uk exclusive deals
        </h2>

        {/* Right Navigation */}
        <nav>
          <ul className="flex flex-wrap gap-6 text-[18px] font-medium">

            <li>
              <button className="hover:text-[#FC8A06] transition mt-3">
                Vegan
              </button>
            </li>

            <li>
              <button className="hover:text-[#FC8A06] transition mt-3">
                Sushi
              </button>
            </li>

            <li>
              <button className="px-10 py-2 rounded-full border-2 border-[#FC8A06] text-[#FC8A06] font-semibold">
                Pizza & Fast Food
              </button>
            </li>

            <li>
              <button className="hover:text-[#FC8A06] transition mt-3">
                Others
              </button>
            </li>

          </ul>
        </nav>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>

    </section>
  );
};

export default Categories;