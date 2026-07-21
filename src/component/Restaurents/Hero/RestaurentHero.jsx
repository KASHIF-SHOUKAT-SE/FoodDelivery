import burger from "../../../assets/Images/restaurent/hero/HeroSections/burger.svg";
import bike from "../../../assets/Images/restaurent/hero/icons/Motocross.svg";
import order from "../../../assets/Images/restaurent/hero/icons/Order Completed.svg";
import clock from "../../../assets/Images/restaurent/hero/icons/Clock.svg";
import star from "../../../assets/Images/restaurent/hero/HeroSections/Rectangle 64.svg";
import heroBg from "../../../assets/Images/restaurent/hero/HeroSections/Group 23.svg";
import pizza from "../../../assets/Images/restaurent/hero/HeroSections/Rectangle 44 (1).svg";

const RestaurantHero = () => {
  return (
    <>
    <section className="hidden lg:block w-full mt-10">
      <div
       className="max-w-[1528px] h-[477px] mx-auto rounded-[12px] relative bg-cover bg-center bg-no-repeat"        
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
  
        <div className="absolute inset-0 bg-[#03081F]/35"></div>

       
        <div className="relative z-10 w-full h-full flex items-center justify-between px-16">

        
          <div className="w-[700px] text-white">

            <p className="text-[18px] mb-6">
              I'm Lovin' it!
            </p>

            <h1 className="text-[54px] font-bold leading-\[65px]">
              McDonald's East London
            </h1>

            <div className="flex gap-5 mt-10">

              <div className="flex items-center gap-3 border border-white rounded-full px-6 h-\[66px]">
                <img
                  src={order}
                  alt="Order Icon"
                  className="w-8 h-8"
                />

                <span className="text-[18px]">
                  Minimum Order: 12 GBP
                </span>

            </div>



            <div className="flex items-center gap-3 border border-white rounded-full px-6 h-[66px]">

                <img
                src={bike}
                alt="Bike Icon"
                className="w-8 h-8"
                />

                <span className="text-[18px] text-white">
                Delivery in 20–25 Minutes
                </span>
                 <div className="absolute left-0 top-110 bg-[#FC8A06] h-[61px] w-[335px] rounded-xl flex items-center px-8">
                <img
                    src={clock}
                    alt=""
                    className="w-7 h-7"
                />
                <span className="text-white font-semibold ml-3">
                    Open until 3:00 AM
                </span>

                </div>

            </div>



            

            </div>

          </div>
          <div className="relative">
            <img src={burger} alt ="" className="max-w-[581px] h-[361px] object-cover rounded-xl"/>
            <img
            src={star}
            alt="Rating Card"
            className="absolute left-[-70px] top-[210px] w-[136px] h-[158px]"/>
          </div>
        </div>
      </div>

      
  
    </section>
    <section className="block lg:hidden px-4 mt-5">

      <div
        className="relative rounded-xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-[#03081F]/35"></div>

        <div className="relative z-10 flex flex-col">

         
          <div className="relative flex justify-center mt-6">

            <img
              src={pizza}
              alt=""
              className="w-[220px]"
            />

            <img
              src={star}
              alt=""
              className="absolute left-2 bottom-2 w-[70px]"
            />

          </div>

       
          <div className="mt-5 bg-[#FC8A06] h-14 flex items-center justify-center gap-3">

            <img
              src={clock}
              alt=""
              className="w-6"
            />

            <span className="text-white font-semibold">
              Open until 3:00 AM
            </span>

          </div>

         

          <div className="text-center text-white px-6 mt-8">

            <p className="text-sm">
              I'm Lovin' it!
            </p>

            <h1 className="text-3xl font-bold mt-2">
              McDonald's East London
            </h1>

          </div>

     

          <div className="px-5 mt-8 space-y-4 pb-8">

            <div className="flex items-center gap-3 bg-[#03081F] rounded-full px-6 h-[60px] text-white">

              <img
                src={order}
                alt=""
                className="w-7"
              />

              <span>
                Minimum Order: 12 GBP
              </span>

            </div>

            <div className="flex items-center gap-3 bg-[#03081F] rounded-full px-6 h-[60px] text-white">

              <img
                src={bike}
                alt=""
                className="w-7"
              />

              <span>
                Delivery in 20–25 Minutes
              </span>

            </div>

          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default RestaurantHero;