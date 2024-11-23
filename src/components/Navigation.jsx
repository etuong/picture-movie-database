import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const navLinks = [
    { href: "/", name: "Home" },
    { href: "/movies", name: "Movies" },
    { href: "/pictures", name: "Pictures" },
  ];

  return (
    <nav className="nav">
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className={activeLinkIndex === index ? "active" : ""}
              onClick={() => setActiveLinkIndex(index)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
