import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/about.jsx";
import Home from "./components/home.jsx";
import Uicomponent from "./components/uitest.jsx";
import Navbar from "./components/navbar.jsx";
const App = () => {
  return (
    <div className="px-4 py-6 m-4 bg-gradient-to-r from-yellow-100 via-ping-250 to-teal-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/uitest" element={<Uicomponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
