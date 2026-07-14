import offers from "../../../data/offers";
import OfferCard from "../../Categories/Exclusive/OfferCard";

const Categories = () => {
  return (
    <section className="max-w-[1528px] mx-auto mt-10 lg:mt-16 px-4">

      {/* Mobile Layout */}
      <div className="block lg:hidden">

       <div className="flex items-center justify-between gap-3">

  <h2 className="text-[18px] font-bold text-[#03081F]">
    Up to -40% Discount Offers 🎊
  </h2>

  <button className="px-5 py-2 rounded-full border-2 border-[#FC8A06] text-[#FC8A06] font-semibold whitespace-nowrap">
    Pizza & Fast Food
  </button>

</div>

        {/* Horizontal Cards */}
        <div className="flex gap-4 overflow-x-auto mt-6 pb-3">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="min-w-[300px] flex-shrink-0"
            >
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>

      </div>


      {/* Desktop Layout */}
      <div className="hidden lg:block mt-[-220px]">

        {/* Header */}
        <div className="flex justify-between items-center">

          <h2 className="text-[32px] font-bold text-[#03081F]">
            Up to -40% 🎉 Order.uk exclusive deals
          </h2>

          <nav>
            <ul className="flex gap-6 text-[18px] font-medium">

              <li className="mt-2">
                <button>Vegan</button>
              </li>

              <li className="mt-2">
                <button>Sushi</button>
              </li>

              <li>
                <button className="px-10 py-2 rounded-full border-2 border-[#FC8A06] text-[#FC8A06]">
                  Pizza & Fast Food
                </button>
              </li>

              <li className="mt-2">
                <button>Others</button>
              </li>

            </ul>
          </nav>

        </div>

        {/* Desktop Cards */}
        <div className="grid grid-cols-3 gap-8 mt-10">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Categories;