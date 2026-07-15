const PartnerCard = ({ image, badge, title }) => {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 left-3 bg-white px-3 py-1  text-xs font-medium w-[250px] h-[50px]  text-center">
        {badge}
      </div>

      <div className="absolute bottom-5 left-5">
        <p className="text-[#FC8A06] text-sm">
          Signup as a business
        </p>

        <h3 className="text-white text-3xl font-bold">
          {title}
        </h3>

        <button className="mt-3 px-5 py-2 rounded-full bg-[#FC8A06] text-white text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PartnerCard;