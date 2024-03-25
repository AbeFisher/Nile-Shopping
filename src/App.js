import './Styles/index.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import DetailPage from './Pages/DetailPage';
import CheckoutPage from './Pages/CheckoutPage';
import CartPage from './Pages/CartPage';
import ThankYouPage from './Pages/ThankYouPage';
import SearchPage from './Pages/SearchPage';

export default function App() {

  return (
      <BrowserRouter>
        <Header />
        <div className="main">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/DetailPage" element={<DetailPage />} />
            <Route path = "/SearchPage" element={<SearchPage />} />
            <Route path = "/CheckoutPage" element={<CheckoutPage />} />
            <Route path = "/ThankYouPage" element={<ThankYouPage />} />
            <Route path = "/CartPage" element={<CartPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
  );

}
