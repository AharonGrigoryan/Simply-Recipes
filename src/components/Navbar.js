import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/tags">Tags</Link>
      <Link to="/resipes">Resipes</Link>
    </nav>
  );
};

export default Navbar;
