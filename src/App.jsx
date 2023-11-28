import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/about.jsx"
import Home from "./components/home.jsx";
import Navbar from "./components/navbar.jsx";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App