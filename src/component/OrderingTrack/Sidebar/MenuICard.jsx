// import promoImage from "../../../assets/Images/OrderingImages/orderingtrack/Promocard.jpg";
// const MenuICard = () => {
//   return (
//     <div className="relative overflow-hidden rounded-xl mt-6">
//         <img 
//         src={promoImage} 
//         alt="promo" 
//         className="w-full h-[180px] object-cover"
//         />
        
//         <div className="absulute top-0 left-4 bg-[#03081F] text-white px-3 py-2 rounded-b-lg font-semibold text-sm">
//             -20%
//         </div>

//         <div className="absolute bottom-4 left-4">
//             <p>
//                 Special Offer
//             </p>
//             <h3 className="text-white text-1xl font-bold">
//                 First Order Discount
//             </h3>
//         </div>
//         <button>
//             +
//             </button>
//     </div>
//   )
// }

// export default MenuICard
import promoImage from "../../../assets/Images/OrderingImages/orderingtrack/Promocard.jpg";

const PromoCard = () => {
  return (
    <div className="relative overflow-hidden rounded-xl mt-6">

      <img
        src={promoImage}
        alt="Promo"
        className="w-full h-[220px] object-cover"
      />

      {/* Discount Badge */}
      <div className="absolute top-0 left-4 bg-[#03081F] text-white px-3 py-2 rounded-b-lg font-semibold text-sm">
        -20%
      </div>

      {/* Content */}
      <div className="absolute bottom-4 left-4">
        <p className="text-[#FC8A06] text-sm">
          Special Offer
        </p>

        <h3 className="text-white text-1xl font-bold">
          First Order Discount
        </h3>
      </div>

      {/* Plus Icon */}
      <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-2xl font-bold">
        +
      </button>

    </div>
  );
};

export default PromoCard;