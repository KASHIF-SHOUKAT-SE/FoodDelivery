import Menu from '../../../assets/Images/OrderingImages/icon/Restaurant Menu.svg'

const categories = [
    "Pizzas",
    "Garlic Bread",
    "Calzone",
    "Kebabs",
    "Salads",
    "Cold drinks",
    "Happy Meal",
    "Desserts",
    "Hot drinks",
    "Sauces",
    "Orbit",

]


const MenuSidebar = () => {
  return (
    <div className='bg-white border border-gray-300 rounded-xl overflow-hidden h-[1078px] '>
        <div className='flex items-center gap-3 px-5 py-6'>
            <img src={Menu} alt="Menu" />
            <h2 className='font-3xl font-bold'>Menu</h2>
        </div>
         <div>
        {categories.map((item, index) => (
          <div
            key={index}
            className={`px-5 py-7 font-bold text-lg cursor-pointer
              ${
                index === 0
                  ? "bg-[#03081F] text-white"
                  : "text-[#03081F]"
              }`}
          >
                    {item}
                </div>
            ))}
        </div>
    </div>
  )
}

export default MenuSidebar
// import Menu from '../../../assets/Images/OrderingImages/icon/Restaurant Menu.svg'

// const categories = [
//   "Pizzas",
//   "Garlic Bread",
//   "Calzone",
//   "Kebabs",
//   "Salads",
//   "Cold drinks",
//   "Happy Meal",
//   "Desserts",
//   "Hot drinks",
//   "Sauces",
//   "Orbit®",
// ];

// const MenuSidebar = () => {
//   return (
//     <div className="bg-white border border-gray-300 rounded-xl overflow-hidden">

//       {/* Header */}
//       <div className="flex items-center gap-3 px-5 py-6">
//         <img src={Menu} alt="Menu" />
//         <h2 className="text-3xl font-bold">Menu</h2>
//       </div>

//       {/* Categories */}
//       <div>
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className={`px-5 py-4 font-bold cursor-pointer
//               ${
//                 index === 0
//                   ? "bg-[#03081F] text-white"
//                   : "text-[#03081F]"
//               }`}
//           >
//             {item}
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default MenuSidebar;