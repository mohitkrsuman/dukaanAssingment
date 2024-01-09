import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PayInfo from './components/PayInfo'
import Payment from './pages/Payment'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/delivery" element={<h1>Delivery</h1>} />
          <Route path="/marketing" element={<h1>Marketing</h1>} />
          <Route path="/analytics" element={<h1>Analytics</h1>} />
          <Route path="/payments" element={<Payment/>} />
          <Route path="/tools" element={<h1>Tools</h1>} />
          <Route path="/discounts" element={<h1>Discounts</h1>} />
          <Route path="/audience" element={<h1>Audience</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App