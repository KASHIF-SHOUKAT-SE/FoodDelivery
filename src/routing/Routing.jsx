import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import OrderingPage from "../Pages/OrderingPage";
import Restaurent from "../Pages/Restaurent";
import SpecialOffers from "../Pages/SpecialOffers";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ordering" element={<OrderingPage />} />
      <Route path="/restaurent" element={<Restaurent />} />
      <Route path="/special-offers" element={<SpecialOffers />} />
    </Routes>
  );
}

export default Routing;


