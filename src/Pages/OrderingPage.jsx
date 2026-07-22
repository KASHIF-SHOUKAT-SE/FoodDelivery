import React from 'react'
import Navbar from '../component/layout/Navbar'
import Hero from '../component/layout/Hero'
import ProductList from '../component/OrderingTrack/Products/ProductList'
import Basket from '../component/OrderingTrack/Basket/Basket'
import SidebarSection from '../component/OrderingTrack/Sidebar/Sidebar Section'
import Order from '../component/OrderingTrack/OrderSection/Order'
const OrderingPage = () => {
  return (
     <section className="max-w-[1528px] mx-auto px-4 mt-10">
      <Navbar/>
        <Hero/>
        <Order/>
      {/* <div className="grid lg:grid-cols-[367px_1fr_367px] gap-6 mt-70">
        
        <SidebarSection/>
        <ProductList/>
        <Basket/>
       
    </div> */}
    </section>
  )
}

export default OrderingPage