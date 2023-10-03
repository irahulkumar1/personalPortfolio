// Header.jsx
import { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import logo from "../../assets/Profile/create a simple 0.png"

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

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <header className="text-textHeaderColor px-4">
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden block focus:outline-none"
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
          <div className="logo w-12 h-12 bg-gray-700 flex justify-center items-center">
          <img src={logo}alt="" className="rounded-full " />
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <NavigationLinks animate={animate} closeMobileMenu={closeMobileMenu} />
        </div>
        <div></div>
      </div>
    </header>
  );
}
