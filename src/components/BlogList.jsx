import BlogCard from "./BlogCard";

function BlogList({ blogs }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          author={blog.author}
          category={blog.category}
          date={blog.date}
          image={blog.image}
          readTime={blog.readTime}
        />
      ))}
    </div>
  );
}

export default BlogList;
