import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links-page">
      <Link to="/home">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/relation">Relation</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Signup</Link>
    </div>
  );
};

export default Links;
