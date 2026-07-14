const CategoryCard = ({ category }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <img
        src={category.image}
        alt={category.title}
        className="w-full h-[160px] object-cover"
      />

   <div className="p-3 bg-[#03081F] lg:bg-[#FFFF]">
  <h3 className="font-semibold text-sm text-[#FFFFFF] lg:text-[#03081F]">
    {category.title}
  </h3>

  <p className="text-[#FC8A06] text-xs mt-1">
    {category.restaurants}
  </p>
</div>
    </div>
  );
};

export default CategoryCard;