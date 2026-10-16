import { NavLink, Link } from "react-router-dom";

function Header() {
  const navLinkStyle = ({ isActive }) => (
    isActive
      ? "bg-white text-green-700 px-4 py-2 rounded-lg font-semibold"
      : "text-white hover:text-green-200 px-4 py-2 rounded-lg"
  );
  return (
    <header className="bg-green-600 text-white rounded-b-2xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        <Link to="/">
          <h1 className="text-3xl font-bold">My Blog</h1>
        </Link>
        <nav className="flex gap-6">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/blogs" className={navLinkStyle}>
            Blogs
          </NavLink>
          <NavLink to="/add-blog" className={navLinkStyle}>
            Add Blog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
