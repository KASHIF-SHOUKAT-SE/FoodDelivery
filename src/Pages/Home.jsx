import React from 'react'
import Navbar from '../component/layout/Navbar'
import Hero from '../component/layout/Hero'
import Categories from '../component/Categories/Exclusive/Categories'
import Popularcategories from '../component/Categories/Popular Categories/Popular Categories'
import Restaurants from '../component/Categories/Restaurants/Restaurants'
import AppPromo from '../component/AppPromo/AppPromo'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Categories/>
        <Popularcategories/>
        <Restaurants/>
        <AppPromo/>
    </div>
  )
}

export default Home