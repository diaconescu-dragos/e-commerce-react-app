import React from 'react';
import './App.scss';
import Homepage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Routes as Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component';

function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/e-commerce-react-app' element={<Homepage/>} />
      <Route path='/e-commerce-react-app/shop' element={<ShopPage/>} />
    </Switch>
  </div>
  );
}

export default App;
