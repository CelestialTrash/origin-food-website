import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landingpage from "./pages/Landingpage";
import Productoslacteos from "./pages/Productoslacteos";
import Granosleguminosos from "./pages/Granosleguminosos";
import Azucar from "./pages/Azucar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/productoslacteos" element={<Productoslacteos />} />
        <Route path="/granosleguminosos" element={<Granosleguminosos />} />
        <Route path="/azucar" element={<Azucar />} />
      </Routes>
    </>
  );
}

export default App;
