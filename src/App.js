import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// import Products from "./pages/Products/Products";
import OliveOil from "./pages/Products/OliveOil";
import Contact from "./pages/Contact/Contact";

import { Container } from "./components/Container.styled";

function App() {
  return (
    <Router>
      <Navbar />
      <Container className="ContainerComponent">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/" element={<About />} />

          {/* <Route path="/products" element={<Products />} /> */}
          <Route exact path="/" element={<OliveOil />} />

          <Route path="/" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
