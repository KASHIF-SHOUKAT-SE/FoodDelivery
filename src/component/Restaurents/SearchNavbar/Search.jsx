import React from "react";
import search from "../../../assets/Images/restaurent/hero/HeroSections/Search More.svg";

// const Search = () => {
//   return (
//     <section className="w-full mt-10">
//       <div className="max-w-[1528px] mx-auto px-5 lg:px-0 flex items-center justify-between">

//         {/* Left Side */}
//         <h2 className="text-[32px] font-bold text-[#03081F]">
//           All Offers from McDonald's East London
//         </h2>

//         {/* Right Side */}
//         <div className="relative">

//           <img
//             src={search}
//             alt="Search"
//             className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5"
//           />

//           <input
//             type="text"
//             placeholder="Search from menu..."
//             className="
//               w-[350px]
//               h-[62px]
//               rounded-full
//               border
//               border-[#AFAFAF]
//               pl-12
//               pr-5
//               text-[16px]
//               outline-none
//               focus:border-[#FC8A06]
//               transition-all
//             "
//           />
//         </div>
//       </div>
//     </section>
//   );
// }   




// export default Search;








const Search = () => {
  return (
    <section className="w-full mt-10">

      {/* Desktop */}
      <div className="hidden lg:flex max-w-[1528px] mx-auto px-5 items-center justify-between">

        <h2 className="text-[32px] font-bold text-[#03081F]">
          All Offers from McDonald's East London
        </h2>

        <div className="relative">
          <img
            src={search}
            alt="Search"
            className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5"
          />

          <input
            type="text"
            placeholder="Search from menu..."
            className="w-[350px] h-[62px] rounded-full border border-[#AFAFAF] pl-12 pr-5 outline-none"
          />
        </div>

      </div>

 {/* Mobile */}
<div className="lg:hidden flex flex-col items-center mt-4">

  {/* Search Box */}
  <div className="relative w-[78%]">

    <img
      src={search}
      alt="Search"
      className="absolute left-10 top-1/2 -translate-y-1/2 w-5 h-5"
    />

    <input
      type="text"
      placeholder="Search from menu..."
      className="
        w-full
        h-[70px]
        rounded-full
        border-2
        border-[#03081F]
        bg-white
        pl-16
        pr-8
        text-[18px]
        font-semibold
        text-center
        placeholder:text-[#6E7082]
        placeholder:font-semibold
        outline-none
      "
    />

  </div>

  {/* Heading */}
  <h2
    className="
      mt-10
      text-center
      text-[28px]
      leading-[38px]
      font-bold
      text-[#03081F]
    "
  >
    Order from Tandoori Pizza London
  </h2>

    </div>
    </section>
  );
};

export default Search;