import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Travels from "./pages/Travels";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/misviajes" element={<Travels />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
