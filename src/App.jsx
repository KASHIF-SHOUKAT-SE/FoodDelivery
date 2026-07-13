import { useState } from 'react'
import Navbar from './component/layout/Navbar'
import Hero from '../src/Pages/Hero'
import './App.css'
import OfferCard from './Pages/OfferCard'
import offers from './data/offers'
import Categories from './Pages/Categories'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
    </div>
  )
}

export default App
