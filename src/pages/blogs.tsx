import React from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <>
      <h1>Blogs</h1>
      <ul>
        <li>
          <Link to="/blogs/first-blog">First Blog</Link>
        </li>
      </ul>
    </>
  );
}
