import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

import Home from "./components/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import Recipes from "./pages/Recipes";
import NotFound from "./pages/NotFound";
import Collections from "./pages/Shop/Collections";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />{" "}
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />{" "}
        <Route path="/blogs" element={<Blogs />} />{" "}
        <Route path="/recipes" element={<Recipes />} />{" "}
        <Route path="/shop/collections" element={<Collections />} />
        <Route path="/testimonials" element={<Testimonials />} />{" "}
      </Routes>
      <CookieConsent />

      <Footer />
    </div>
  );
}

export default App;
