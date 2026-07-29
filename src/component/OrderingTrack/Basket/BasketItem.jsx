import Remove from '../../../assets/Images/OrderingImages/basketicon/Remove.svg'
const BasketItem = ({id,qty, price, name,}) => {
  return (
    <div className="flex gap-3 p-4 border-b items-center">
      <div className="w-15 h-15 rounded-full bg-[#FC8A06] text-white flex items-center jestify-center text-sm font-bold">
        <h1 className='ml-3 font-bold text-3xl'>
        {qty}
        </h1>
        </div>
      <div className="flex-1">
        <h4 className="text-[#029D50] font-bold">{price}</h4>
        <p className='font-bold'>{name}</p>
        {id !== 3 && (
  <>
    <p>No Mushrooms + green</p>
    <p>Peppers</p>
  </>
)}
      </div>
      <button><img src={Remove} alt="remove" /></button>
    </div>
  )
}

export default BasketItem
// const BasketItem = ({ qty, price, name }) => {
//   return (
//     <div className="flex gap-3 p-4 border-b">

//       <div className="w-8 h-8 rounded-full bg-[#FC8A06] text-white flex items-center justify-center text-sm font-bold">
//         {qty}
//       </div>

//       <div className="flex-1">

//         <h4 className="text-[#029D50] font-bold">
//           {price}
//         </h4>

//         <p className="font-medium">
//           {name}
//         </p>

//         <p className="text-xs text-gray-500">
//           No Mushrooms + green peppers
//         </p>

//       </div>

//       <button className="text-red-500 font-bold">
//         ✕
//       </button>

//     </div>
//   );
// };

// export default BasketItem;