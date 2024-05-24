// Frontend/src/router/Routers.js

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Gallery from "../../pages/Gallery";
import About from "../../pages/About";
import ContactUs from '../../pages/ContactUs';
import Admin from '../../pages/Admin';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="Home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default Routers;
