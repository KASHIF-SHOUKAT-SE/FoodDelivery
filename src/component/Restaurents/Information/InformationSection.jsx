import tracking from "../../../assets/Icons/InfoIcon/Tracking.svg";
import verified from "../../../assets/Icons/InfoIcon/ID Verified.svg";
import clock from "../../../assets/Icons/InfoIcon/Clock.svg";

const InformationSection = () => {
  return (
    <section className="w-full mt-16 mb-20">
      <div className="max-w-[1528px] mx-auto rounded-xl overflow-hidden shadow-lg">

        <div className="grid grid-cols-1 lg:grid-cols-3">

          {/* Delivery Information */}
          <div className="bg-white px-10 py-12">

            <div className="flex items-center gap-4 mb-8">
              <img
                src={tracking}
                alt="Tracking"
                className="w-[45px] h-[45px]"
              />

              <h2 className="text-[32px] font-bold text-[#03081F]">
                Delivery information
              </h2>
            </div>

            <div className="space-y-4 text-[18px] text-[#03081F]">

              <p><span className="font-bold">Monday:</span> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>

              <p><span className="font-bold">Tuesday:</span> 8:00 AM–3:00 AM</p>

              <p><span className="font-bold">Wednesday:</span> 8:00 AM–3:00 AM</p>

              <p><span className="font-bold">Thursday:</span> 8:00 AM–3:00 AM</p>

              <p><span className="font-bold">Friday:</span> 8:00 AM–3:00 AM</p>

              <p><span className="font-bold">Saturday:</span> 8:00 AM–3:00 AM</p>

              <p><span className="font-bold">Sunday:</span> 8:00 AM–12:00 AM</p>

              <p>
                <span className="font-bold">
                  Estimated time until delivery:
                </span>{" "}
                20 min
              </p>

            </div>

          </div>

          {/* Contact Information */}
          <div className="bg-white px-10 py-12 border-l border-r border-gray-200">

            <div className="flex items-center gap-4 mb-8">

              <img
                src={verified}
                alt="Verified"
                className="w-[45px] h-[45px]"
              />

              <h2 className="text-[32px] font-bold text-[#03081F]">
                Contact information
              </h2>

            </div>

            <p className="text-[18px] leading-9 text-[#03081F]">
              If you have allergies or other dietary restrictions,
              please contact the restaurant. The restaurant
              will provide food-specific information upon request.
            </p>

            <div className="mt-10 space-y-6">

              <div>

                <h4 className="font-bold text-[20px]">
                  Phone number
                </h4>

                <p className="text-[18px] mt-2">
                  +934443-43
                </p>

              </div>

              <div>

                <h4 className="font-bold text-[20px]">
                  Website
                </h4>

                <p className="text-[18px] mt-2">
                  http://mcdonalds.uk/
                </p>

              </div>

            </div>

          </div>

          {/* Operational Times */}
          <div className="bg-[#03081F] px-10 py-12 text-white">

            <div className="flex items-center gap-4 mb-8">

              <img
                src={clock}
                alt="Clock"
                className="w-[45px] h-[45px]"
              />

              <h2 className="text-[32px] font-bold">
                Operational Times
              </h2>

            </div>

            <div className="space-y-4 text-[18px]">

              <p><span className="font-bold">Monday:</span> 8:00 AM–3:00 AM</p>

              <p><span className="font-bold">Tuesday:</span> 8:00 AM–3:00 AM</p>

              <p><span className="font-bold">Wednesday:</span> 8:00 AM–3:00 AM</p>

              <p><span className="font-bold">Thursday:</span> 8:00 AM–3:00 AM</p>

              <p><span className="font-bold">Friday:</span> 8:00 AM–3:00 AM</p>

              <p><span className="font-bold">Saturday:</span> 8:00 AM–3:00 AM</p>

              <p><span className="font-bold">Sunday:</span> 8:00 AM–3:00 AM</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InformationSection;