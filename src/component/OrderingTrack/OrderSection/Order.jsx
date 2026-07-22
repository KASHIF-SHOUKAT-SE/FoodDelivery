import SidebarSection from "../Sidebar/Sidebar Section"
import ProductList from "../Products/ProductList"
import Basket from "../Basket/Basket"

const Order = () => {
  return (
    <div>
      
    <div className="grid lg:grid-cols-[350px_1fr_350px] gap-6 mt-30">
    <SidebarSection/>
    <ProductList/>
    <Basket/>
    </div>
    </div>
  )
} 

export default Order