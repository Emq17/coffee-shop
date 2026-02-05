import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/shared/Header";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import PopUps from "./pages/PopUps";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pop-ups" element={<PopUps />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
