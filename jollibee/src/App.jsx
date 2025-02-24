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
import NewProduct from "./components/NewProduct";
import Beverage from "./components/Beverage";
import Breakfast from "./components/Breakfast";
import Burger from "./components/Burger";
import BurgerSteak from "./components/BurgerSteak";
import ChickenJoy from "./components/ChickenJoy";
import ChickenSand from "./components/ChickenSand";
import Dessert from "./components/Dessert";
import FamilyMeals from "./components/FamilyMeals";
import Fries from "./components/Fries";
import JollyPies from "./components/JollyPies";
import JollySpag from "./components/JollySpag";
import KiddieMeal from "./components/KiddieMeal";
import Palabok from "./components/Palabok";
import SuperMeals from "./components/SuperMeals";
import Egifts from "./components/Egifts";

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
        <Route path="/NewProduct" element={<NewProduct />} />
        <Route path="/Beverage" element={<Beverage />} />
        <Route path="/Breakfast" element={<Breakfast />} />
        <Route path="/Burger" element={<Burger />} />
        <Route path="/BurgerSteak" element={<BurgerSteak />} />
        <Route path="/ChickenJoy" element={<ChickenJoy />} />
        <Route path="/ChickenSand" element={<ChickenSand />} />
        <Route path="/Dessert" element={<Dessert />} />
        <Route path="/FamilyMeals" element={<FamilyMeals />} />
        <Route path="/Fries" element={<Fries />} />
        <Route path="/JollyPies" element={<JollyPies />} />
        <Route path="/JollySpag" element={<JollySpag />} />
        <Route path="/KiddieMeal" element={<KiddieMeal />} />
        <Route path="/NewProduct" element={<NewProduct />} />
        <Route path="/Palabok" element={<Palabok />} />
        <Route path="/SuperMeals" element={<SuperMeals />} />
        <Route path="/Egifts" element={<Egifts />} />
      </Routes>
    </Router>
  );
};

export default App;
