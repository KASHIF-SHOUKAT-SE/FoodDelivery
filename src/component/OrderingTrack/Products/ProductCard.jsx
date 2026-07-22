const ProductCard = ({pizza}) => {
  return (
    <div className="bg-white rounded-xl h-[380px] w-[750px] shadow-md p-5 mt-5">
      <div className="flex justify-between ">
      <div className="flex-1">
        {/* {left side} */}
        <h3 className="text-[22px] font-bold text-[#03081F]">
          {pizza.name}
          </h3>
      

      <div className="flex gap-1 mt-2">
        <span>🌶️</span>
        <span>🌶️</span>
        <span>🌶️</span>
        <span>🌶️</span>
        <span>🌶️</span>
      </div>

      <p className="text-gray-500 text-sm mt-7">
        {pizza.description}
      </p>
      <p className="text-gray-500 text-sm mt-2">
        3 cold drinks
      </p>
    </div>
    

    {/* {Right side } */}
    <div className="relative">
      <img 
      src={pizza.image} 
      alt="pizza.name" 
      className=" rounded-full object-cover"
      />
    </div>
  </div>
           {/* {size} */}
           <div className="flex flex-wrap mt-3 gap-6">
            <button className="border rounded px-3 bg-[#03081F] text-white py-2 text-sm font-semibold">Small
              <span className="ml-2 bg-[#029D50] text-white px-3 py-1 rounded">£7.90</span>
            </button>
              <button className="border rounded px-3 py-2 text-sm font-semibold">Medium
              <span className="ml-2 bg-[#029D50] text-white px-3 py-1 rounded">£25.90</span>
            </button>
              <button className="border rounded px-3 py-2 text-sm font-semibold ">Large
              <span className="border bg-[#029D50] text-white px-3 py-1 rounded">£27.90</span>
            </button>
           </div>
            <button className="mt-8 border roundex px-3 py-2 text-sm font-semibold">XL Large with Sauces
              <span className="ml-2 bg-[#029D50] text-white px-3 py-1 rounded">£32.90</span>
            </button>
  </div>
    // {size}
  )
}

export default ProductCard




// const ProductCard = ({ pizza }) => {
//   return (
//     <div className="bg-white rounded-xl h-[300px] shadow-md p-5">

//       <div className="flex justify-between gap-4">

//         {/* Left Side */}
//         <div className="flex-1">

//           <h3 className="text-[22px] font-bold text-[#03081F]">
//             {pizza.name}
//           </h3>

//           <div className="flex gap-1 mt-2">
//             <span className="text-red-500">🌶️</span>
//             <span className="text-red-500">🌶️</span>
//             <span className="text-red-500">🌶️</span>
//             <span className="text-red-500">🌶️</span>
//             <span className="text-red-500">🌶️</span>
//           </div>

//           <p className="text-gray-500 text-sm mt-4">
//             {pizza.description}
//           </p>

//           <p className="text-gray-500 text-sm mt-2">
//             3 cold drinks
//           </p>

//         </div>

//         {/* Right Side Image */}
//         <div className="relative">

//           <img
//             src={pizza.image}
//             alt={pizza.name}
//             className="w-[120px] h-[120px] rounded-full object-cover"
//           />

//           <div className="absolute -top-2 -left-2 text-2xl">
//             🥬
//           </div>

//         </div>

//       </div>

//       {/* Sizes */}
//       <div className="flex flex-wrap gap-3 mt-6">

//         <button className="border rounded px-3 py-2 text-sm font-semibold">
//           Small
//           <span className="ml-2 bg-[#029D50] text-white px-3 py-1 rounded">
//             £7.90
//           </span>
//         </button>

//         <button className="border rounded px-3 py-2 text-sm font-semibold">
//           Medium
//           <span className="ml-2 bg-[#029D50] text-white px-3 py-1 rounded">
//             £25.90
//           </span>
//         </button>

//         <button className="border rounded px-3 py-2 text-sm font-semibold">
//           Large
//           <span className="ml-2 bg-[#029D50] text-white px-3 py-1 rounded">
//             £27.90
//           </span>
//         </button>

//       </div>

//       <button className="mt-3 border rounded px-3 py-2 text-sm font-semibold">
//         XL Large with Sauces
//         <span className="ml-2 bg-[#029D50] text-white px-3 py-1 rounded">
//           £32.90
//         </span>
//       </button>

//     </div>
//   );
// };

// export default ProductCard;