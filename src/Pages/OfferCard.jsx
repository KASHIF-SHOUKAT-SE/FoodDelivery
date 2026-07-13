
const OfferCard = ({ offer }) => {
  return (
    <div className="relative rounded-xl overflow-hidden group cursor-pointer">

      <img
        src={offer.image}
        alt={offer.title}
        className="w-full h-[260px] object-cover duration-300 group-hover:scale-105"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#03081F] via-transparent to-transparent"></div>

      {/* Discount */}

      <div className="absolute top-0 right-5 bg-[#03081F] text-white text-sm font-semibold px-4 py-3 rounded-b-xl">

        {offer.discount}

      </div>

      {/* Content */}

      <div className="absolute bottom-5 left-5">

        <p className="text-[#FC8A06] text-sm">

          {offer.category}

        </p>

        <h2 className="text-white text-2xl font-bold">

          {offer.title}

        </h2>

      </div>

    </div>
  );
};

export default OfferCard;