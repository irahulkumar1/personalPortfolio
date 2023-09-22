import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setTimeout(() => {
        setAnimate(true);
      }, 200);
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-textHeaderColor px-4">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden block pl-4 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden lg:flex"
          } lg:flex items-center lg:items-center justify-center lg:justify-around space-y-8`}
      >
        <div className="flex items-center justify-center lg:pl-4">
          <div className="logo w-12 h-12 bg-gray-700 rounded-full flex justify-center items-center">
            <p className="text-2xl font-semibold text-highLighter">RK</p>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <nav className={`space-y-2 lg:space-x-24 lg:items-center cursor-pointer`}>
            <HashLink
              to="/"
              className={`block lg:inline  ${animate ? "opacity-100" : "opacity-0"
                }`}
              style={{ transitionDelay: "0.2s" }}
            >
              Home
            </HashLink>
            <HashLink
              to="/About"
              className={`block lg:inline ${animate ? "opacity-100" : "opacity-0"
                }`}
              style={{ transitionDelay: "0.3s" }}
            >
              About
            </HashLink>
            <HashLink
              to="/Services"
              className={`block lg:inline ${animate ? "opacity-100" : "opacity-0"
                }`}
              style={{ transitionDelay: "0.6s" }}
            >
              Services
            </HashLink>
            <HashLink
              to="/Resume"
              className={`block lg:inline ${animate ? "opacity-100" : "opacity-0"
                }`}
              style={{ transitionDelay: "0.9s" }}
            >
              Resume
            </HashLink>
            <HashLink
              to="/Contact"
              className={`block lg:inline ${animate ? "opacity-100" : "opacity-0"
                }`}
              style={{ transitionDelay: "1.3s" }}
            >
              Contact
            </HashLink>
          </nav>
        </div>
        <div></div>
      </div>
    </header>
  );
}
