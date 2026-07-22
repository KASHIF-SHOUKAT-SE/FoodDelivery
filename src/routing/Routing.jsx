import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import OrderingPage from "../Pages/OrderingPage";
import Restaurent from "../Pages/Restaurent";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ordering" element={<OrderingPage />} />
      <Route path="/restaurent" element={<Restaurent />} />
    </Routes>
  );
}

export default Routing;


