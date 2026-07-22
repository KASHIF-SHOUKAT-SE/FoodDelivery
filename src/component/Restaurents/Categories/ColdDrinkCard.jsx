const ColdDrinkCard = ({ drink }) => {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <img
        src={drink.image}
        alt="Cold Drink"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ColdDrinkCard;