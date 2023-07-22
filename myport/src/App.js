import { Routes, Route } from "react-router-dom";
import Contact from "./component/Contact.js";
import About from "./component/About.js";
import Home from "./component/Home.js";
import Header from "./component/Header.js";
import Project from "./component/Project.js";
import Footer from "./component/Footer.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
