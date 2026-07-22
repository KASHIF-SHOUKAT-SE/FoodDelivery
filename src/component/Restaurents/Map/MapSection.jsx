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
    <section className="w-full mt-16 mb-20">
      <div
        className="
          relative
          max-w-[1528px]
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
              w-[231px]
              h-[73px]
              bg-white
              rounded-lg
              shadow-lg
              flex
              items-center
              px-5
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

          {/* Pin Circle */}
          <div
            className="
              -ml-4
              w-[45px]
              h-[45px]
              rounded-full
              bg-[#03081F]
              flex
              items-center
              justify-center
              shadow-lg
              z-20
            "
          >
            <img
              src={pin}
              alt="Location"
              className="w-[20px] h-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;