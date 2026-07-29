// import map from "../../../assets/Images/Map/Rectangle 52.svg";
// import pin from "../../../assets/Icons/MapIcon/Previous Location.svg";
// import circle from "../../../assets/Icons/MapIcon/Ellipse 2.svg";

// const MapSection = () => {
//   return (
//     <section className="w-full mt-16 mb-20">

//       <div
//         className="
//           relative
//           max-w-[1528px]
//           h-[659px]
//           mx-auto
//           rounded-xl
//           overflow-hidden
//         "
//       >

//         {/* Background Map */}

//         <img
//           src={map}
//           alt="Map"
//           className="w-full h-full object-cover"
//         />

//         {/* Left Information Card */}

//         <div
//           className="
//             absolute
//             left-[75px]
//             top-[60px]

//             w-[466px]
//             h-[539px]

//             bg-[#03081F]
//             rounded-xl

//             p-8

//             text-white
//           "
//         >

//           <h2 className="text-[42px] font-bold leading-none">
//             McDonald's
//           </h2>

//           <h3 className="text-[#FC8A06] text-[26px] font-semibold mb-8">
//             South London
//           </h3>

//           <p className="text-[18px] leading-8 text-gray-300">
//             Tooley St,
//             London Bridge,
//             London
//             SE1 2TF,
//             United Kingdom
//           </p>

//           <div className="mt-12">

//             <h4 className="font-bold text-[22px]">
//               Phone number
//             </h4>

//             <p className="text-[#FC8A06] text-[28px] mt-3">
//               +934443-43
//             </p>

//           </div>

//           <div className="mt-10">

//             <h4 className="font-bold text-[22px]">
//               Website
//             </h4>

//             <p className="text-[#FC8A06] text-[28px] mt-3">
//               http://mcdonalds.uk/
//             </p>

//           </div>

//         </div>

//         {/* Map Pin */}

//         <div
//           className="
//             absolute
//             right-[170px]
//             top-[180px]
//           "
//         >

//           <div className="relative">

//             <img
//               src={circle}
//               alt=""
//               className="
//                 w-[170px]
//               "
//             />

//             <div
//               className="
//                 absolute
//                 inset-0
//                 flex
//                 justify-center
//                 items-center
//               "
//             >

//               <img
//                 src={pin}
//                 alt=""
//                 className="w-[45px]"
//               />

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default MapSection;



import map from "../../../assets/Images/Map/Rectangle 52.svg";
import pin from "../../../assets/Icons/MapIcon/Previous Location.svg";

const MapSection = () => {
  return (
    <section className="w-full mt-16 mb-20 px-4 lg:px-0">
      <div
        className="
          relative
          max-w-[1528px]
          mx-auto
          h-[660px]
          lg:h-[659px]
          h-[659px]
          mx-auto
          rounded-xl
          overflow-hidden
        "
      >
        {/* Background Map */}
        <img
          src={map}
          alt="Map"
          className="w-full h-full object-cover"
        />

        {/* Left Information Card */}
        <div
          className="
            absolute
            left-[60px]
            top-[60px]
            w-[466px]
            h-[539px]
            bg-[#03081F]
            rounded-xl
            p-8
            text-white
          "
        >
          <h2 className="text-[42px] font-bold leading-none">
            McDonald's
          </h2>

          <h3 className="text-[#FC8A06] text-[26px] font-semibold mt-2 mb-8">
            South London
          </h3>

          <p className="text-[18px] leading-8 text-gray-300">
            Tooley St,
            London Bridge,
            London SE1 2TF,
            United Kingdom
          </p>

          <div className="mt-12">
            <h4 className="text-[22px] font-bold">
              Phone number
            </h4>

            <p className="mt-3 text-[28px] text-[#FC8A06]">
              +934443-43
            </p>
          </div>

          <div className="mt-10">
            <h4 className="text-[22px] font-bold">
              Website
            </h4>

            <p className="mt-3 text-[28px] text-[#FC8A06]">
              http://mcdonalds.uk/
            </p>
          </div>
        </div>

        {/* Figma Location Popup */}
        <div
          className="
            absolute
            right-[90px]
            top-[170px]
            flex
            items-start
          "
        >
          {/* White Card */}
          <div
            className="
              w-[190px]
              h-[65px]
              lg:w-[231px]
              lg:h-[73px]
              bg-white
              rounded-lg
              shadow-lg
              flex
              items-center
              px-4
              lg:px-5
              z-10
            "
          >
            <div>
              <h3 className="text-[15px] font-bold text-[#03081F] leading-5">
                McDonald's
              </h3>

              <p className="text-[14px] text-[#03081F] leading-5">
                South London
              </p>
            </div>
          </div>

          {/* Pin */}
          <div
            className="
              -ml-3
              w-10
              h-10
              lg:w-[45px]
              lg:h-[45px]
              rounded-full
              bg-[#03081F]
              flex
              items-center
              justify-center
              shadow-lg
              z-20"
            >
            <img
              src={pin}
              alt="Location"
              className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]"
            />
          </div>
        </div>

        {/* Information Card */}
        <div
          className="
            absolute

            left-1/2
            -translate-x-1/2
            top-[85px]

            w-[88%]
            max-w-[466px]

            bg-[#03081F]
            rounded-xl
            p-6

            text-white
            z-20

            lg:left-[60px]
            lg:translate-x-0
            lg:top-[60px]
            lg:w-[466px]
            lg:h-[539px]
            lg:p-8
          "
        >
          <h2 className="text-4xl lg:text-[42px] font-bold leading-none">
            McDonald's
          </h2>

          <h3 className="text-[#FC8A06] text-2xl lg:text-[26px] font-semibold mt-2 mb-6 lg:mb-8">
            South London
          </h3>

          <p className="text-base lg:text-[18px] leading-8 text-gray-300">
            Tooley St,
            <br />
            London Bridge,
            <br />
            London SE1 2TF,
            <br />
            United Kingdom
          </p>

          <div className="mt-8 lg:mt-12">
            <h4 className="text-xl lg:text-[22px] font-bold">
              Phone number
            </h4>

            <p className="mt-3 text-2xl lg:text-[28px] text-[#FC8A06]">
              +934443-43
            </p>
          </div>

          <div className="mt-8 lg:mt-10">
            <h4 className="text-xl lg:text-[22px] font-bold">
              Website
            </h4>

            <p className="mt-3 text-2xl lg:text-[28px] text-[#FC8A06] break-words">
              http://mcdonalds.uk/
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;