const stats = [
  {
    id: 1,
    number: "546+",
    label: "Registered Riders",
  },
  {
    id: 2,
    number: "789,900+",
    label: "Orders Delivered",
  },
  {
    id: 3,
    number: "690+",
    label: "Restaurants Partnered",
  },
  {
    id: 4,
    number: "17,457+",
    label: "Food items",
  },
];

const StatsSection = () => {
  return (
    <section className="max-w-[1528px] mx-auto px-4 mt-12">
  <div className="bg-[#FC8A06] rounded-lg py-6 h-auto lg:h-[125px]">
  <div className="grid grid-cols-1 lg:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={item.id}
              className={`
                flex flex-col items-center justify-center
                px-6 py-4 text-white mt-[-10px]
                ${
                index !== stats.length - 1
  ? "border-b lg:border-b-0 lg:border-r border-white/40"
  : ""
                }
              `}
            >
              <h2 className="text-[32px] lg:text-[44px] font-semibold leading-none">
                {item.number}
              </h2>

              <p className="text-sm lg:text-lg font-medium mt-2 text-center">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;