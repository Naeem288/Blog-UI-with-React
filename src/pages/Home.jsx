import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";

function Home() {
  return (
    <>
      <Hero />
      <main className="container mx-auto px-4 py-10">
        <div className="grid gap-6 md: grid-cols-3">
          <BlogCard
            title="Learning React"
            description="React makes building user interfaces simples."
          />
          <BlogCard
            title="Understanding Props"
            description="Props allow us to pass data."
          />
          <BlogCard
            title="Tailwind Css"
            description="Tailwind helps build modern interfaces."
          />
        </div>
      </main>
    </>
  );
}

export default Home;
