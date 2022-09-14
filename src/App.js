import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import OliveOil from "./pages/Products/OliveOil";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route exact path="/" element={<OliveOil />} />
        <Route path="/" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
