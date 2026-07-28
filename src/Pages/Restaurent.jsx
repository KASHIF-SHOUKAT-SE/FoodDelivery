
import React, { useState } from 'react'
import Navbar from '../component/layout/Navbar'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import RestaurentHero from "../component/Restaurents/Hero/RestaurentHero"
import Search from '../component/Restaurents/SearchNavbar/Search'
import RestaurantCategoryNavbar from '../component/Restaurents/SearchNavbar/RestaurantCategoryNavbar'
import OffersSection from '../component/Restaurents/Categories/OffersSection'
import  BurgersSection  from '../component/Restaurents/Categories/BurgersSection'
import FriesSection from '../component/Restaurents/Categories/FriesSection'
import ColdDrinksSection from '../component/Restaurents/Categories/ColdDrinksSection'
import InformationSection from '../component/Restaurents/Information/InformationSection'
import MapSection from '../component/Restaurents/Map/MapSection'
import ReviewsSection from '../component/Restaurents/Reviews/ReviewsSection'
import RestaurantPopular from "../component/Restaurents/PopularRestaurants/RestaurantPopular";
import Footer from '../component/Footer/Footer'
import SpecialOfferModal from '../component/SpecialOffer/SpecialOfferModal'

const Restaurant = () => {
  const [showOffer, setShowOffer] = useState(false);

  return (
    <>
      <Navbar />
      <RestaurentHero/>
      <Search/>
      < RestaurantCategoryNavbar />
      <OffersSection onSpecialOfferClick={() => setShowOffer(true)} />
      <BurgersSection />
      <FriesSection />
      <ColdDrinksSection />
      <InformationSection />
      <MapSection />
      <ReviewsSection />
      <RestaurantPopular />
      <Footer />

      {/* Special Offer Modal (MealDeal → Customize Pizza flow) */}
      <SpecialOfferModal
        isOpen={showOffer}
        onClose={() => setShowOffer(false)}
      />
    </>
  );
};

export default Restaurant;