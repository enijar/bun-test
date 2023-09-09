import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav/nav";

export default function Blogs() {
  return (
    <main>
      <Nav />
      <h1>Blogs</h1>
      <ul>
        <li>
          <Link to="/blogs/first-blog">First Blog</Link>
        </li>
      </ul>
    </main>
  );
}
