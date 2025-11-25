import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import About from "./components/About";
import Courses from "./components/Courses";
import Home from "./pages/Home";
import Personnel from "./pages/Personnel";
import NotFound from "./pages/NotFound";
import PersonnelDetails from "./pages/PersonnelDetails";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router";
import { useEffect } from "react";

function App() {
  const [seed, setSeed] = useState(localStorage.getItem("personnelSeed") || "");
  useEffect(() => {
    document.title = "E-Learner";
  }, []);
  return (
    <Router>
      <div className="appLayout">
        <Navbar />
        <div className="pageContent">
          <Routes>
            <Route index path="/" element={<Home />}/>
            <Route
              path="/personnel"
              element={<Personnel seed={seed} setSeed={setSeed} />}
            />
            <Route
              path="/personnel/:id"
              element={<PersonnelDetails seed={seed} setSeed={setSeed} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/notfound" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
