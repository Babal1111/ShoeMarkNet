import React from "react";
import { BrowserRouter as Router, Routes, Route, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router future={{ v7_startTransition: true ,v7_relativeSplatPath: true}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
