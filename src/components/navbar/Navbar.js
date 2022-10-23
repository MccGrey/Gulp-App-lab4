import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="container nav">
        <Link to="/" className="logo">
          LOGO
        </Link>
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/alcoholicDrinks">Alcoholic Drinks</CustomLink>
          <CustomLink to="/nonAlcoholicDrinks">Non-Alcoholic Drinks</CustomLink>
        </ul>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
