import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Delivery from "./components/Delivery";
import Location from "./components/Location";
import ViewMenu from "./components/ViewMenu";
import MultiDelivery from "./components/MultiDelivery";
import Promos from "./components/Promos";
import GiftCard from "./components/GiftCard";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/ViewMenu" element={<ViewMenu />} />
        <Route path="/MultiDelivery" element={<MultiDelivery />} />
        <Route path="/Promos" element={<Promos />} />
        <Route path="/GiftCard" element={<GiftCard />} />
      </Routes>
    </Router>
  );
};

export default App;
