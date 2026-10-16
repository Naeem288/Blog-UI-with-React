import { useState } from "react";
const emptyForm = {
  title: "",
  category: "",
  author: "",
  image: "",
  description: "",
};
function AddBlog({ addBlog }) {
  const [formData, setFormData] = useState(emptyForm);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
    setSuccessMessage("");
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //browser ko form submit karne par page reload karne se rokta hai.

    const newBlog = {
      id: Date.now(), //current timestamp se ID banata hai, taake naye blog ko unique identifier mil sake.
      title: formData.title,
      category: formData.category,
      author: formData.author,
      image: formData.image,
      description: formData.description,
    };
    addBlog(newBlog);
    setFormData(emptyForm);
    setSuccessMessage("Blog added successfully! Go to  Blogs page to see it.");
  };
  return (
    <main className="px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">Add New Blog</h1>
        <p className="mb-8 text-gray-600">
          Fill this form to add a new blog post to the blog list.
        </p>
        {successMessage && (
          <p className="mb-6 rounded-lg bg-green-100 px-4 py-3 text-green-700">
            {successMessage}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-white p-6 shadow-md"
        >
          <div className="mb-5">
            <label
              htmlFor="title"
              className="mb-2 block font-medium text-gray-700"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full rounded-lg border border-gray-700 px-4 py-3 outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="category"
              className="mb-2 block font-medium text-gray-700"
            >
              Blog Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Example: React"
              className="w-full rounded-lg border border-gray-700 px-4 py-3 outline-none focus:border-green-500"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="author"
              className="mb-2 block font-medium text-gray-700"
            >
              Author Name
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter blog author"
              className="w-full rounded-lg border border-gray-700 px-4 py-3 outline-none focus:border-green-500"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="image"
              className="mb-2 block font-medium text-gray-700"
            >
              Blog Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full rounded-lg border border-gray-700 px-4 py-3 outline-none focus:border-green-500"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="description"
              className="mb-2 block font-medium text-gray-700"
            >
              Blog Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short blog description"
              className="w-full resize-none rounded-lg border border-gray-700 px-4 py-3 outline-none focus:border-green-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
          >
            Add Blog
          </button>
        </form>
      </div>
    </main>
  );
}

export default AddBlog;
