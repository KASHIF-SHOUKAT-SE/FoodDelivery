import React from 'react'
import Navbar from '../component/layout/Navbar'
// import Hero from '../component/layout/Hero'
import Hero from '../component/Restaurents/Hero/RestaurentHero'
import ProductList from '../component/OrderingTrack/Products/ProductList'
import Basket from '../component/OrderingTrack/Basket/Basket'
import SidebarSection from '../component/OrderingTrack/Sidebar/Sidebar Section'
import Order from '../component/OrderingTrack/OrderSection/Order'
import Search from '../component/Restaurents/SearchNavbar/Search'
import pizza from '../assets/Images/restaurent/hero/HeroSections/Rectangle 44 (1).svg'
import InformationSection from '../component/Restaurents/Information/InformationSection'
import MapSection from '../component/Restaurents/Map/MapSection'
import ReviewsSection from '../component/Restaurents/Reviews/ReviewsSection'
import RestaurantPopular from '../component/Restaurents/PopularRestaurants/RestaurantPopular'
import Footer from '../component/Footer/Footer'
const OrderingPage = () => {
  return (
    <>
     <section className="max-w-[1528px] mx-auto px-4 ">
      <Navbar className=""/>
        <Hero HeroImage={pizza}/>
        <Search name="Order from Tandoori Pizza London"/>
        <Order/>
        <InformationSection/>
        <MapSection/>
        <ReviewsSection/>
        <RestaurantPopular/>
      
      {/* <div className="grid lg:grid-cols-[367px_1fr_367px] gap-6 mt-70">
        
        <SidebarSection/>
        <ProductList/>
        <Basket/>
       
    </div> */}
    </section>
    <Footer/>
    </>
  )
}

export default OrderingPage

















