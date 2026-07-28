import { useState } from "react";
import Menu from "../../../assets/Images/OrderingImages/icon/Restaurant Menu.svg";

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
];

const MenuSidebar = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Pizzas");

  return (
    <>

      {/* MOBILE + TABLET */}
      <div className="lg:hidden bg-white border border-gray-300 rounded-xl overflow-hidden w-[500px]">

        <div
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between px-4 py-3 cursor-pointer"
        >

          <div className="flex items-center gap-3">
            <img 
              src={Menu} 
              alt="Menu"
              className="w-8 h-8"
            />

            <h2 className="text-2xl font-bold text-[#03081F]">
              Menu
            </h2>
          </div>


          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold">
              {selected}
            </span>

            <span className="bg-gray-400 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
              ↓
            </span>
          </div>

        </div>


        {open && (
          <div>
            {categories.map((item,index)=>(
              <div
                key={index}
                onClick={()=>{
                  setSelected(item);
                  setOpen(false);
                }}
                className={`px-5 py-5 font-bold ${
                  selected === item
                  ? "bg-[#03081F] text-white"
                  : "text-[#03081F]"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}

      </div>



      {/* DESKTOP - SAME AS BEFORE */}
      <div className="hidden lg:block bg-white border border-gray-300 rounded-xl overflow-hidden h-[1078px]">

        <div className="flex items-center gap-3 px-5 py-6">
          <img src={Menu} alt="Menu" />

          <h2 className="font-3xl font-bold">
            Menu
          </h2>
        </div>


        <div>
          {categories.map((item,index)=>(
            <div
              key={index}
              className={`px-5 py-7 font-bold text-lg cursor-pointer
                ${
                  index === 0
                  ? "bg-[#03081F] text-white"
                  : "text-[#03081F]"
                }
              `}
            >
              {item}
            </div>
          ))}
        </div>

      </div>

    </>
  );
};

export default MenuSidebar;
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