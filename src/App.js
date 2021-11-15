import React from 'react';
import './App.scss';
import Homepage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Routes as Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/e-commerce-react-app' element={<Homepage/>} />
      <Route path='/e-commerce-react-app/shop' element={<ShopPage/>} />
    </Switch>
  </div>
  );
}

export default App;
