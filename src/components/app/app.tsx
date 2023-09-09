import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Blogs from "../../pages/blogs";
import BlogSingle from "../../pages/blog-single";
import NotFound from "../../pages/not-found";

export default function App() {
  React.useEffect(() => {
    console.log("App");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:slug" element={<BlogSingle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
