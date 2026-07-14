const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-xl">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-[95px] lg:h-[180px] object-cover"
      />

      <div className="h-[33px] lg:h-auto bg-[#FC8A06] flex items-center justify-center lg:p-3">
        <h3 className="text-white text-[10px] lg:text-base text-center font-medium">
          {restaurant.name}
        </h3>
      </div>
    </div>
  );
};

export default RestaurantCard;