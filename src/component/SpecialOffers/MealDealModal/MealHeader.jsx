import Background from "../../../assets/Images/SpecialOffers/mealDeal1/background.png";
import Closed from '../../../assets/Images/SpecialOffers/meadlDealIcon/Close.svg'
import BackgroundBurger from '../../../assets/Images/SpecialOffers/mealDeal1/Rectangle 53.svg'
import  Forward  from "../../../assets/Images/SpecialOffers/meadlDealIcon/Forward.svg";
import MealItemCard from "./MealItemCard";
const MealHeader = () => {
  return (
    <div className="relative w-[1528px] h-[1440px] mx-auto">

      {/* Background Image */}
      <img
        src={Background}
        alt="background"
        className="w-full h-full object-cover"
      />

      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* Content */}
     <div className="absolute inset-0 flex items-center  justify-center">

  {/* White Box */}
  <div className="relative bg-white w-[1000px] h-[1300px] rounded-xl">

    {/* Close Button */}
    <button className="absolute -top-9 -right-12 bg-[#FC8A06] w-[80px] h-[80px] rounded-full flex items-center justify-center shadow-lg">
      <img src={Closed} alt="Close" />
    </button>
    <img src={BackgroundBurger} alt="backgroundburger" />
     <div className="flex ml-20 mt-10">
        <h5 className="font-bold text-2xl">Special Offers</h5>
        <img className="ml-5 mt-1" src={Forward} alt="forward" />
        <h5 className="font-bold text-2xl ml-5">Meal Deal 1</h5>
     </div>
     <MealItemCard/>
  </div>
  
</div>

    </div>
  );
};

export default MealHeader;