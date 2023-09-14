import  { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

export function Header() {
  // State to manage the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between h-16 bg-pink-300">
      <header className="flex-col">
        <section className="logo">
          <h2 className="text-textHeaderColor font-bold">personal portfolio</h2>
        </section>
        <section>
          {/* Show/hide the menu based on screen size */}
          <div className={`lg:flex flex-col lg:flex-row lg:gap-8 text-center ${isMenuOpen ? 'block' : 'hidden'}`}>
            <HashLink to="/" className="text-textHeaderColor">
              Home
            </HashLink>
            <HashLink to="/" className="text-textHeaderColor">
              About
            </HashLink>
            <HashLink to="/" className="text-textHeaderColor">
              Services
            </HashLink>
            <HashLink to="/" className="text-textHeaderColor">
              Resume
            </HashLink>
            <HashLink to="/" className="text-textHeaderColor">
              Contact
            </HashLink>
          </div>
        </section>
        <section>
          {/* Hamburger menu button */}
          <button
            className="lg:hidden block text-textHeaderColor"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </section>
      </header>
    </div>
  );
}
