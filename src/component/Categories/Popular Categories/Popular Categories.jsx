import categories from "../../../data/Popular categories";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="max-w-[1528px] mx-auto px-4 mt-12">

      <h2 className="text-3xl font-bold mb-8">
        Order.uk Popular Categories 🤩
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-5">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>

    </section>
  );
};

export default Categories;