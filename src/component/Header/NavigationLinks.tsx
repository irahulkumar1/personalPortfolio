// NavigationLinks.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function NavigationLinks({ closeMobileMenu }: any) {
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);

  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/About", text: "About" },
    { path: "/Work", text: "Works" },
    { path: "/Resume", text: "Resume" },
    { path: "/Contact", text: "Contact" },
  ];

  const activeLinkStyle = "text-red-500";

  const handleClick = () => {
    closeMobileMenu();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100); // Delay to ensure the transition is visible

    return () => clearTimeout(timeout);
  }, []);

  return (
    <nav className="lg:flex lg:space-x-8">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          onClick={handleClick}
          className={`lg:inline-block px-3 py-2 rounded hover:bg-gray-200 ${
            location.pathname === link.path ? activeLinkStyle : ""
          } ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}

export default NavigationLinks;
