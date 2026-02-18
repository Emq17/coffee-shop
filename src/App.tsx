import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pop-ups" element={<Navigate to="/home" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}
