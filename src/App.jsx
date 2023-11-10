import React from "react";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Relation from "./views/Relation";
import Settings from "./views/Settings";
import Links from "./views/Links";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Routes>
        <Route exact path="/" element={<Links />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/relation" element={<Relation />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </Switch>
  );
};

export default App;
