import React from "react";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Relation from "./views/Relation";
import Settings from "./views/Settings";
import Links from "./views/Links";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import ChatLog from "./views/ChatLog";

const App = () => {
  return (
    <Switch>
      <Routes>
        {/* <Route exact path="/" element={<Links />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/relation" element={<Relation />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/chatlog" element={<ChatLog />} />
      </Routes>
    </Switch>
  );
};

export default App;

/* 
1. signup: 1. tell us about yourself 2. who's the problem 3. add relation --> partner, family, friend, professional -> text field for name of relation 
2. mic and input field ... both 
*/
