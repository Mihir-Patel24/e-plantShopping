import { useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";
import AboutUs from "./AboutUs.jsx";

function Home() {
  const [showProductList, setShowProductList] = useState(false);
  if (showProductList) return <ProductList />;
  return (
    <div className="app-container">
      <Navbar />
      <main className="background-image">
        <div className="landing-overlay" />
        <section className="landing-content">
          <p className="eyebrow">GROW YOUR OWN LITTLE PARADISE</p>
          <h1>Welcome to Paradise Nursery</h1>
          <p>Beautiful houseplants for a happier, greener home.</p>
          <button className="get-started-button" onClick={() => setShowProductList(true)}>Get Started</button>
          <p><Link to="/about" className="about-link">Learn more about us</Link></p>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<><Navbar /><AboutUs /></>} />
    <Route path="/plants" element={<ProductList />} />
    <Route path="/cart" element={<CartItem />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}
