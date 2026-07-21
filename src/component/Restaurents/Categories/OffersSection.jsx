import OfferCard from "./OfferCard";
import { offersData } from "../../../data/RetaurentData/offersData";

const OffersSection = () => {
  return (
    
    <section className="w-full mt-10">
        

      <div className="max-w-[1528px] mx-auto">

        <div className="hidden lg:grid lg:grid-cols-3 gap-6">

          {offersData.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
            />
          ))}

        </div>

      </div>
      {/* Mobile */}
  <div className="lg:hidden">
    {/* Yahan baad me mobile cards banayenge */}
  </div>

    </section>
  );
};

export default OffersSection;