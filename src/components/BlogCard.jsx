function BlogCard({ title, description }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
      <button className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 mt-4">
        Read More
      </button>
    </div>
  );
}

export default BlogCard;
