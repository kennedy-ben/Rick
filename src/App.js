import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Header from "./pages/home";
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<login/>}/> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
