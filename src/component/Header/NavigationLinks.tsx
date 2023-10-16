// NavigationLinks.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react"; // Import useEffect

interface NavigationLinksProps {
  animate: boolean;
  closeMobileMenu: () => void;
}

function NavigationLinks({ animate, closeMobileMenu }: NavigationLinksProps) {
  const location = useLocation();

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  return (
    <nav className={`space-y-2 lg:flex lg:space-x-24 lg:items-center font-semibold  `}>
      <Link
        to="/"
        className={`block lg:inline ${animate ? "opacity-100" : "opacity-0"
          } ${location.pathname === '/' ? 'text-red-500' : ''}`}
        style={{ transitionDelay: "0.2s" }}
      >
        Home
      </Link>
      <Link
        to="/About"
        className={`block lg:inline ${animate ? "opacity-100" : "opacity-0"
          } ${location.pathname === '/About' ? 'text-red-500' : ''}`}
        style={{ transitionDelay: "0.3s" }}
      >
        About
      </Link>
      <Link
        to="/Services"
        className={`block lg:inline ${animate ? "opacity-100" : "opacity-0"
          } ${location.pathname === '/Services' ? 'text-red-500' : ''}`}
        style={{ transitionDelay: "0.6s" }}
      >
        Services
      </Link>
      <Link
        to="/Resume"
        className={`block lg:inline ${animate ? "opacity-100" : "opacity-0"
          } ${location.pathname === '/Resume' ? 'text-red-500' : ''}`}
        style={{ transitionDelay: "0.9s" }}
      >
        Resume
      </Link>
      <Link
        to="/Contact"
        className={`block lg:inline ${animate ? "opacity-100" : "opacity-0"
          } ${location.pathname === '/Contact' ? 'text-red-500' : ''}`}
        style={{ transitionDelay: "1.3s" }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavigationLinks;
