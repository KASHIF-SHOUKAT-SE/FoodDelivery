const BurgerCard = ({ burger }) => {
  return (
    <div className="w-[576px] h-[225px]">

      <img

        src={burger.image}
        alt="Burger"
        className="w-[496px] h-full object-cover rounded-xl"
      />

    </div>
  );
};

export default BurgerCard;