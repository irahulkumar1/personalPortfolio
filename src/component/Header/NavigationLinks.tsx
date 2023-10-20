// NavigationLinks.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react"; // Import useEffect

interface NavigationLinksProps {
  animate: boolean;
  closeMobileMenu: () => void;
}

function NavigationLinks({ animate, closeMobileMenu }: NavigationLinksProps) {
  const activebBorderStyle = ' hover:border-red-500 hover:border-b-2 px-2'
  const location = useLocation();

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  return (
    <nav className={`space-y-2 lg:flex lg:space-x-24 lg:items-center font-semibold  `}>
      <Link
        to="/"
        className={`block lg:inline ${activebBorderStyle} ${animate ? "opacity-100" : "opacity-0"
          } ${location.pathname === '/' ? 'text-red-500' : ''}`}
        style={{ transitionDelay: "0.2s" }}
      >
        Home
      </Link>
      <Link
        to="/About"
        className={`block lg:inline ${activebBorderStyle} ${animate ? "opacity-100" : "opacity-0"
          } ${location.pathname === '/About' ? 'text-red-500' : ''}`}
        style={{ transitionDelay: "0.3s" }}
      >
        About
      </Link>
      <Link
        to="/Work"
        className={`block lg:inline ${activebBorderStyle} ${animate ? "opacity-100" : "opacity-0"
          } ${location.pathname === '/Work' ? 'text-red-500' : ''}`}
        style={{ transitionDelay: "0.6s" }}
      >
        Works
      </Link>
      <Link
        to="/Resume"
        className={`block lg:inline ${activebBorderStyle} ${animate ? "opacity-100" : "opacity-0"
          } ${location.pathname === '/Resume' ? 'text-red-500' : ''}`}
        style={{ transitionDelay: "0.9s" }}
      >
        Resume
      </Link>
      <Link
        to="/Contact"
        className={`block lg:inline ${activebBorderStyle} ${animate ? "opacity-100" : "opacity-0"
          } ${location.pathname === '/Contact' ? 'text-red-500' : ''}`}
        style={{ transitionDelay: "1.3s" }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavigationLinks;
