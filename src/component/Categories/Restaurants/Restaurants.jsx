import restaurants from "../../../data/restaurants";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  return (
    <section className="max-w-[1528px] mx-auto px-4 mt-10">

      <h2 className="text-3xl font-bold mb-8">
        Popular Restaurants
      </h2>

      <div className="flex lg:grid lg:grid-cols-6 gap-5 overflow-x-auto lg:overflow-visible pb-3">
  {restaurants.map((restaurant) => (
    <div
      key={restaurant.id}
      className="w-[122px] h-[128px] flex-shrink-0 lg:w-auto lg:h-auto"
    >
      <RestaurantCard restaurant={restaurant} />
    </div>
  ))}
</div>

      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </div> */}

    </section>
  );
};

export default Restaurants;