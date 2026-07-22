import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import OrderingPage from "../Pages/OrderingPage";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ordering" element={<OrderingPage />} />
    </Routes>
  );
}

export default Routing;


