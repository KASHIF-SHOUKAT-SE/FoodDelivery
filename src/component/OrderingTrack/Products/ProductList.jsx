import pizza from '../../../data/OrderingData/pizzas'
import ProductCard from "./ProductCard";
import ForwardButton from '../../../assets/Images/OrderingImages/icon/Forward Button.svg';

const ProductList = () => {
  return (
    <div>
      <div className='flex justify-between mt-6'>
        <h1 className='font-bold text-3xl'>Pizzas</h1>
        <button className='border-1 border-gray-300 px-15 py-4 rounded-full  '>
          Sort by Pricing
          </button>
      </div>
      {pizza.map((pizza)=>(
      <ProductCard 
      key={pizza.id} pizza={pizza}
      />
      ))}
    </div>
  )
}

export default ProductList
// import pizza from "../../../data/OrderingData/pizzas";
// import ProductCard from "./ProductCard";

// const ProductList = () => {
//   return (
//     <div className="space-y-5">
//       {pizza.map((pizza) => (
//         <ProductCard
//           key={pizza.id}
//           pizza={pizza}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProductList;