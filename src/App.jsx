/* eslint-disable */
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./pages/cart";
import Home from "./pages/home";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Nav } from "./components/nav";
	  <Nav />
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
