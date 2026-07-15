import FAQTabs from "./FAQTabs";
import FAQQuestions from "./FAQQuestions";
import FeatureCard from "./FeatureCard";
import faqCards from "../../data/faqData";

const FAQSection = () => {
  return (
    <section className="max-w-[1528px] mx-auto px-4 mt-12">

      <div className="bg-[#F5F5F5] rounded-xl p-8 lg:p-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:text-left text-center">

          <h2 className="text-3xl font-bold">
            Know more about us!
          </h2>

          <FAQTabs />

        </div>

        {/* Content */}
        <div className="bg-black lg:bg-white rounded-xl p-8 mt-10">

          <div className="grid lg:grid-cols-[320px_1fr] gap-10">

            <FAQQuestions />

            <div>

              <div className="grid md:grid-cols-3 gap-5">

                {faqCards.map((card) => (
                  <FeatureCard
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                  />
                ))}

              </div>

              <p className="text-center text-sm mt-8 max-w-[700px] mx-auto  text-white lg:text-black">
                Order.UK simplifies the food ordering process.
                Browse through our diverse menu, select your
                favorite dishes, and proceed to checkout.
                Your delicious meal will be on its way to your
                doorstep in no time!
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQSection;