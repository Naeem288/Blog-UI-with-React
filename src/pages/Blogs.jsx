import { useState } from "react";
import BlogList from "../components/BlogList";

function Blogs({ blogs }) {
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  const filteredBlogs =
    category === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === category);

  const [sortBy, setSortBy] = useState("newest");

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date) - new Date(a.date);
    }

    if (sortBy === "oldest") {
      return new Date(a.date) - new Date(b.date);
    }

    if (sortBy === "az") {
      return a.title.localeCompare(b.title);
    }

    if (sortBy === "za") {
      return b.title.localeCompare(a.title);
    }

    return 0;
  });
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 3;

  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  const displayedBlogs = sortedBlogs.slice(startIndex, endIndex);

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-green-600 font-bold mb-2">Our Blogs</p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Articles
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto">
            Read beginner-friendly articles about React, components, props,
            routing, and clean user interface design.
          </p>
        </div>

        <div className="flex gap-6 justify-between">
          <div className="mb-8">
            <label htmlFor="category" className="block font-semibold mb-2">
              Filter by Category
            </label>

            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-8">
            <label htmlFor="sortBy" className="block font-semibold mb-2">
              Sort Blogs
            </label>

            <select
              id="sortBy"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="az">Title: A-Z</option>
              <option value="za">Title: Z-A</option>
            </select>
          </div>
        </div>

        <BlogList blogs={displayedBlogs} />

        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="flex justify-center items-center gap-2 mt-10"
          >
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg border disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                aria-current={currentPage === index + 1 ? "page" : undefined}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === index + 1
                    ? "bg-green-600 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg border disabled:opacity-40"
            >
              Next
            </button>
          </nav>
        )}
      </section>
    </main>
  );
}

export default Blogs;
