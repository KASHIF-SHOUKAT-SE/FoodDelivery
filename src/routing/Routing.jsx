import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Restaurent from "../Pages/Restaurent"
import OfferModal from "../Pages/OfferModal";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurent" element={<Restaurent />} />
      <Route path="/special-offer" element={<OfferModal />} />
    </Routes>
  );
}

export default Routing;


