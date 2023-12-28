// Header.jsx
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavigationLinks from "./NavigationLinks";
import logo from "../../assets/Profile/create a simple 0.png";

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setIsMounted(false); // Reset isMounted state on every click
    if (!isMobileMenuOpen) {
      setTimeout(() => {
        setIsMounted(true);
      }, 100); // Delay to ensure the transition is visible
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setIsMounted(false); // Reset isMounted state on menu close
  };

  return (
    <header className="text-textHeaderColor">
      <div className="flex items-center justify-between">
        <button onClick={toggleMobileMenu} className="lg:hidden block focus:outline-none">
          {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>
      <div className={`${isMobileMenuOpen ? "block" : "hidden lg:block"} lg:flex items-center justify-between`}>
        <div className="lg:flex items-center hidden">
          <div className="logo w-12 h-12 bg-gray-700 flex justify-center">
            <img src={logo} alt="" className="rounded-full w-20" />
          </div>
        </div>
        <NavigationLinks closeMobileMenu={closeMobileMenu} isMobileMenuOpen={isMobileMenuOpen} isMounted={isMounted} />
      </div>
    </header>
  );
}
