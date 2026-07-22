import { Plus } from "lucide-react";

const OfferCard = ({ offer }) => {
  return (
    <div className="relative w-full h-[325px] rounded-xl overflow-hidden group cursor-pointer">

      <img
        src={offer.image}
        alt={offer.title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />

      {/* <div className="absolute inset-0 bg-gradient-to-t  to-transparent" /> */}

      {/* <div className="absolute top-0 right-6 bg-[#03081F] text-white px-5 py-4 rounded-b-xl font-semibold">
        {offer.discount}
      </div> */}

      {/* <div className="absolute bottom-6 left-6">

        <p className="text-[#FC8A06] text-[18px]">
          {offer.restaurant}
        </p>

        <h2 className="text-white text-[38px] font-bold">
          {offer.title}
        </h2>

      </div> */}
{/* 
      <button className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-[#03081F] text-white flex items-center justify-center">

        <Plus size={28} />

      </button> */}

    </div>
  );
};

export default OfferCard;