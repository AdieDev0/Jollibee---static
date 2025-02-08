import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Delivery from "./components/Delivery";
import Location from "./components/Location";
import ViewMenu from "./components/ViewMenu";
import MultiDelivery from "./components/MultiDelivery";
import Promos from "./components/Promos";
import GiftCard from "./components/GiftCard";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </Router>
  );
};

export default App;
