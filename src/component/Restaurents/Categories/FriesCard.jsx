import plus from "../../../assets/Icons/PlusIcon/Plus.svg";

const FriesCard = ({ fries }) => {
  return (
    <div className="w-full h-[245px] bg-white rounded-xl shadow-lg flex justify-between items-center px-5">

      {/* Left Side */}
      <div className="flex-1 pr-4">

        <h3 className="text-[22px] font-bold text-[#03081F] leading-7">
          {fries.title}
        </h3>

        <p className="text-[#6B7280] text-[14px] leading-7 mt-4">
          {fries.description}
        </p>

        <h4 className="text-[22px] font-bold text-[#03081F] mt-6">
          {fries.price}
        </h4>

      </div>

      {/* Right Side */}
      <div className="relative w-[203px] h-[203px]">

        <img
          src={fries.image}
          alt={fries.title}
          className="w-full h-full object-cover rounded-xl"
        />

        {/* White Background */}
        <div
          className="
            absolute
            bottom-0
            right-0
            w-[72px]
            h-[72px]
            rounded-tl-[18px]
            bg-white/90
            flex
            items-center
            justify-center
          "
        >
          <img
            src={plus}
            alt="Plus"
            className="w-[49px] h-[49px]"
          />
        </div>

      </div>

    </div>
  );
};

export default FriesCard;