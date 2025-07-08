import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Soups from './components/menuItems/soups';
import VegetarianStarters from './components/menuItems/vegetarianStarters';
import NonVegetarianStarters from './components/menuItems/nonVegStarters';
import Salads from './components/menuItems/salads';
import Breads from './components/menuItems/breads';
import MainCourse from './components/menuItems/mainCourse';
import Desserts from './components/menuItems/desserts';
import Drinks from './components/menuItems/drinks';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/soups" element={<Soups />} />
        <Route path="/menu/veg-starters" element={<VegetarianStarters />} />
        <Route path="/menu/nonveg-starters" element={<NonVegetarianStarters />} />
        <Route path="/menu/salads" element={<Salads />} />
        <Route path="/menu/breads" element={<Breads />} />
        <Route path="/menu/main-course" element={<MainCourse />} />
        <Route path="/menu/desserts" element={<Desserts />} />
        <Route path="/menu/drinks" element={<Drinks />} />
      </Routes>
    </Router>
  );
}

export default App;
