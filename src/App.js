import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/AboutUs';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Soups from './components/menuItems/soups';
import VegetarianStarters from './components/menuItems/vegetarianStarters';
import NonVegetarianStarters from './components/menuItems/nonVegStarters';
import Salads from './components/menuItems/salads';
import Breads from './components/menuItems/breads';
import MainCourse from './components/menuItems/mainCourse';
import Desserts from './components/menuItems/desserts';
import Drinks from './components/menuItems/drinks';
import './App.css';
import Reservations from './components/Reservations';
import Order from './components/Order';
import { OrderProvider } from './components/context/OrderContext'; 

function App() {
  return (
    <OrderProvider>
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/menu/soups" element={<Soups />} />
        <Route path="/menu/veg-starters" element={<VegetarianStarters />} />
        <Route path="/menu/nonveg-starters" element={<NonVegetarianStarters />} />
        <Route path="/menu/salads" element={<Salads />} />
        <Route path="/menu/breads" element={<Breads />} />
        <Route path="/menu/main-course" element={<MainCourse />} />
        <Route path="/menu/desserts" element={<Desserts />} />
        <Route path="/menu/drinks" element={<Drinks />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
    </OrderProvider>
  );
}

export default App;
