import React from 'react'
import Navbar from '../component/layout/Navbar'
import Hero from '../component/layout/Hero'
import Categories from '../component/Categories/Exclusive/Categories'
import Popularcategories from '../component/Categories/Popular Categories/Popular Categories'
import Restaurants from '../component/Categories/Restaurants/Restaurants'
import AppPromo from '../component/AppPromo/AppPromo'
import PartnersSection from '../component/PartnerCard/PartnersSection'
import FAQSection from '../component/FAQSection/FAQSection'
import StatsSection from '../component/StatsSection/StatsSection'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Categories/>
        <Popularcategories/>
        <Restaurants/>
        <AppPromo/>
        <PartnersSection/>
        <FAQSection/>
        <StatsSection/>
    </div>
  )
}

export default Home