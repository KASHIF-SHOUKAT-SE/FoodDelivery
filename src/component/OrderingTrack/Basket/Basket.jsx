import FullBasket from '../../../assets/Images/OrderingImages/basketicon/Shopping Basket.svg'
import BasketItem from './BasketItem'
import Basketdata from '../../../data/OrderingData/basket'
import Forwardbtn  from '../../../assets/Images/OrderingImages/basketicon/Forward Button.svg'
import Delivery from '../../../assets/Images/OrderingImages/basketicon/Delivery Scooter.svg'
import Newstore from '../../../assets/Images/OrderingImages/basketicon/New Store.svg'
import Clock  from '../../../assets/Images/OrderingImages/basketicon/Clock.svg'
const Basket = () => {
  return (
  <div className=''>
        <button className='flex border rounded-lg w-full bg-[#FC8A06] p-5 text-white' >
          <span className=''><img src={Clock} alt="" /></span>
          <span className='font-bold ml-5 mt-4'>Open until 3:00 AM</span>
        </button>
      
    <div className='bg-white rounded-xl border overflow-hidden mt-1'>
      
      <div className='bg-[#029D50] text-white p-8 flex items-center gap-8'>
        <span className='text-2xl'>
          <img src={FullBasket} alt="" />
        </span>
        <h2 className='font-bold text-2xl'>My Basket</h2>
        
      </div>
      <div>
        {/* <BasketItem qty="1"/> */}
        {Basketdata.map((item)=>(
          <BasketItem 
          key={item.id}
          id={item.id}
          qty={item.qty}
          price={item.price}
          name={item.name}
         
          />
        ))}
      </div>
       
       {/* Summary */}
       <div className='p-4 border-t'>
        <div className='flex justify-between mb-3'>
          <span className='font-semibold'>Sub Total:</span>
          <span>£127.90</span>
        </div>
        <div className='flex justify-between mb-3'>
          <span className='font-semibold'>Discounts:</span>
          <span>-3.00</span>
        </div>
        <div className='flex justify-between mb-3'>
          <span className='font-semibold'> Delivery Fee:</span>
          <span>2.50</span>
        </div>
       </div>

       {/* total */}
       <div className='p-4 border-t border-b'>
        <div className='bg-[#FC8A06] text-white rounded-lg px-4 py-3 flex justify-between items-center'>
          <span>Total to pay</span>
          <span className='text-3xl font-bold'> £127.90</span>
        </div>
        <div className='p-4 space-y-3'>
          <button className='flex justify-between w-full border rounded-full px-4 py-3'>
            <span>Choose your free item.</span>
            <span><img src={Forwardbtn} alt="forward" /></span>
          </button>
          <button className='flex justify-between w-full border rounded-full px-4 py-3 '>
            <span>Apply Coupon Code here</span>
            <span><img src={Forwardbtn} alt="" /></span>
          </button>
        </div>
       </div>
       {/* delivery */}
       <div className='grid grid-cols-2 gap-3 p-4  mt-5 '>
        <div className='border border-lg p-3 text-center bg-[#EEEEEE] '>
          <div className='text-2xl ml-12 '>
            <img src={Delivery} alt="" />
          </div>
            <h4 className="font-semibold">Delivery</h4>
            <p>Starts at 17:50</p>
        </div>
        <div className='border-l border-lg p-3 text-center'>
          <div className='ml-12'>
            <img src={Newstore} alt="" />
            </div>
          <h4 className="font-semibold">Collection</h4>
          <p> Starts at 16:50</p>
        </div>
       </div>

       {/* checkout */}
       <div className='p-4 mt-5'>
        
        <button className=' flex  bg-[#029D50] w-full text-white rounded-lg py-4 font-bold text-xl'>
          <span className='bg-amber-50'>
            <img src={Forwardbtn} alt="" />
          </span>
          <span className='ml-20'> Checkout!</span>
         
          </button>
       </div>
      
       </div>
       </div>
  )
}

export default Basket
// import BasketItem from "./BasketItem";

// const Basket = () => {
//   return (
//     <div className="bg-white rounded-xl border overflow-hidden h-[1367px]">

//       {/* Header */}
//       <div className="bg-[#029D50] text-white p-4 flex items-center gap-3">
//         <span className="text-2xl">🧺</span>
//         <h2 className="font-bold text-2xl">My Basket</h2>
//       </div>

//       {/* Items */}
//       <div>
//         <BasketItem
//           qty="1x"
//           price="£27.90"
//           name='12" Vegetarian Pizza'
//         />

//         <BasketItem
//           qty="1x"
//           price="£17.90"
//           name='17" Tandoori Pizza'
//         />

//         <BasketItem
//           qty="2x"
//           price="£4.90"
//           name="Coke Coca Cola"
//         />

//         <BasketItem
//           qty="1x"
//           price="£27.90"
//           name='12" Vegetarian Pizza'
//         />
//       </div>

//       {/* Summary */}
//       <div className="p-4 border-t">

//         <div className="flex justify-between mb-3">
//           <span className="font-semibold">Sub Total:</span>
//           <span>£127.90</span>
//         </div>

//         <div className="flex justify-between mb-3">
//           <span className="font-semibold">Discounts:</span>
//           <span>-3.00</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="font-semibold">Delivery Fee:</span>
//           <span>2.50</span>
//         </div>

//       </div>

//       {/* Total */}
//       <div className="p-4">
//         <div className="bg-[#FC8A06] text-white rounded-lg px-4 py-3 flex justify-between items-center">
//           <span>Total to pay</span>
//           <span className="text-3xl font-bold">
//             £127.90
//           </span>
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="px-4 space-y-3">

//         <button className="w-full border rounded-full px-4 py-3 flex justify-between">
//           <span>Choose your free item.</span>
//           <span>➜</span>
//         </button>

//         <button className="w-full border rounded-full px-4 py-3 flex justify-between">
//           <span>Apply Coupon Code here</span>
//           <span>➜</span>
//         </button>

//       </div>

//       {/* Delivery */}
//       <div className="grid grid-cols-2 gap-3 p-4">

//         <div className="border rounded-lg p-3 text-center">
//           <div className="text-2xl">🛵</div>
//           <h4 className="font-semibold">Delivery</h4>
//           <p className="text-xs text-gray-500">
//             Starts at 17:50
//           </p>
//         </div>

//         <div className="border rounded-lg p-3 text-center">
//           <div className="text-2xl">🏪</div>
//           <h4 className="font-semibold">Collection</h4>
//           <p className="text-xs text-gray-500">
//             Starts at 16:50
//           </p>
//         </div>

//       </div>

//       {/* Checkout */}
//       <div className="p-4">
//         <button className="w-full bg-[#029D50] text-white py-4 rounded-lg font-bold text-xl">
//           Checkout!
//         </button>
//       </div>

//     </div>
//   );
// };

// export default Basket;