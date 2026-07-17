const FooterBottom = () => {
  return (
    <div className="bg-[#03081F] text-white">
      <div className="max-w-[1528px] mx-auto px-4 py-4">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Left Side */}
          <p className="text-xs text-center lg:text-left">
            Order.uk Copyright 2024, All Rights Reserved.
          </p>

          {/* Right Side */}
          <div className="flex flex-wrap justify-center gap-6 text-xs">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>

            <a href="#" className="hover:underline">
              Terms
            </a>

            <a href="#" className="hover:underline">
              Pricing
            </a>

            <a href="#" className="hover:underline">
              Do not sell or share my personal information
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FooterBottom;