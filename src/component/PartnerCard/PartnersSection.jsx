import PartnerCard from "./PartnerCard";
import partners from "../../data/partners";

const PartnersSection = () => {
  return (
    <section className="max-w-[1528px] mx-auto px-4 mt-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[550px] md:h-[650px] lg:h-[325px]">        {partners.map((item) => (
          <PartnerCard
            key={item.id}
            image={item.image}
            badge={item.badge}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;