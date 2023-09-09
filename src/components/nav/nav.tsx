import React from "react";
import { Link } from "react-router-dom";
import { NavWrapper } from "./nav.styles";

export default function Nav() {
  return (
    <NavWrapper>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blogs">Blogs</Link>
    </NavWrapper>
  );
}
