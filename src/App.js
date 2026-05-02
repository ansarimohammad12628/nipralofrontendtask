import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayouts";
import Home from "./Pages/Home";
import Industries from "./Pages/Industries";
import Pentakuhl from "./Pages/Pentakuhl";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pentakuhl" element={<Pentakuhl />} />
          <Route path="/industries" element={<Industries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
