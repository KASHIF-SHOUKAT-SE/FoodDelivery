import appBanner from "../../../src/assets/Images/Addpromo/friends.svg";
import appstore from '../../assets/Images/Addpromo/playstore.svg'
import appstore1 from '../../assets/Images/Addpromo/appstore.png'
const AppPromo = () => {
  return (
    <section className="max-w-[1528px] mx-auto px-4 mt-12">
      <div className="bg-[#EDEDED] rounded-xl overflow-hidden">

        <div className="grid lg:grid-cols-2 items-center">

          {/* Left Side Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={appBanner}
              alt="Ordering App"
              className="w-full max-w-[500px] object-contain"
            />
          </div>

          {/* Right Side Content */}
          <div className="px-6 lg:px-12 py-8 text-center lg:text-left">

            <h2 className="text-[32px] lg:text-[54px] font-bold text-[#03081F]">
              Order<span className="text-[#FC8A06]">ing</span> is more
            </h2>

            <div className="inline-flex items-center mt-2 px-5 py-2 rounded-full w-[900px] h-[100px] bg-[#03081F]">
              <span className="text-[#FC8A06] text-[20px] lg:text-[32px] font-semibold underline">
                Personalised
              </span>

              <span className="text-white text-[20px] lg:text-[32px] font-semibold ml-2">
                & Instant
              </span>
            </div>

            <p className="mt-4 text-sm text-[#03081F]">
              Download the Order.uk app for faster ordering
            </p>

            <div className="flex justify-center lg:justify-start gap-3 mt-5">
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