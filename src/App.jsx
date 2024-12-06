import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Marketing from "./pages/Marketing";
import Schedule from "./pages/Schedule";
import Terms from "./pages/Terms";
import Sponsors from "./pages/Sponsors";
import Workshops from "./pages/Workshops";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import MarqueeOrange from "./components/Common/MarqueeOrange";
import Footer from "./components/Common/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/toc" element={<Terms />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/workshops" element={<Workshops />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
