const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-[#D9D9D9] rounded-xl p-6 text-center">
      <img
        src={image}
        alt={title}
        className="w-20 h-20 mx-auto"
      />

      <h3 className="font-bold mt-4">
        {title}
      </h3>

      <p className="text-sm mt-2">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;