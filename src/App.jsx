
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import AddBlog from "./pages/AddBlog";
import { blogsData } from "./data/blogsData";

function App() {
  const [blogs, setBlogs] = useState(blogsData);

  const addBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs blogs={blogs} />} />
          <Route path="/add-blog" element={<AddBlog addBlog={addBlog} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
