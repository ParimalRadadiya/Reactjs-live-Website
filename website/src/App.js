import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return(
    <>
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/service" element={<Service />}></Route>
     <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App;