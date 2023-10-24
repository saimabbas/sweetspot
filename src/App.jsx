import React from "react";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Home from "./views/Home";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
      </Routes>
    </Switch>
  );
};

export default App;
