import appBanner from "../../../src/assets/Images/Addpromo/friends.svg";
import appstore from "../../assets/Images/Addpromo/playstore.svg";
import appstore1 from "../../assets/Images/Addpromo/appstore.png";

const AppPromo = () => {
  return (
    <section className="max-w-[1528px] mx-auto px-4 mt-12">
      <div className="bg-[#EDEDED] rounded-xl overflow-hidden">

        <div className="grid lg:grid-cols-2 items-center">

          {/* Left Side Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <img
              src={appBanner}
              alt="Ordering App"
              className="w-full max-w-[500px] object-contain"
            />
          </div>

          {/* Right Side Content */}
          <div className="order-1 lg:order-2 px-6 lg:px-12 py-8 text-center lg:text-left">

            <h2 className="text-[32px] lg:text-[54px] font-bold text-[#03081F] lg:ml-8">
              Order<span className="text-[#FC8A06]">ing</span> is more
            </h2>

            {/* Black Banner */}
            <div className="flex justify-center lg:justify-start mt-2">
              <div className="flex items-center px-8 py-2 rounded-full bg-[#03081F] w-fit lg:w-[500px]">
                <span className="text-[#FC8A06] text-[20px] lg:text-[32px] font-semibold underline ml-10">
                  Personalised
                </span>

                <span className="text-white text-[20px] lg:text-[32px] font-semibold ml-2">
                  & Instant
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-[#03081F] lg:ml-20">
              Download the Order.uk app for faster ordering
            </p>

            <div className="flex justify-center lg:justify-start gap-3 mt-5 lg:ml-20">
              <img
                src={appstore}
                alt="App Store"
                className="h-10"
              />

              <img
                src={appstore1}
                alt="Google Play"
                className="h-10 rounded-[7px]"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AppPromo;