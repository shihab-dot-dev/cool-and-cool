import React, { useState } from "react";
import { Phone, Menu, X, Wrench, Snowflake } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar bg-base-100 shadow-lg fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <button
            className="btn btn-ghost"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {isMenuOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#areas">Service Areas</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              {/* <li>
                <a href="#testimonials">Reviews</a>
              </li> */}
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          )}
        </div>
        <a
          href="#"
          className="btn btn-ghost text-xl font-bold text-primary flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Snowflake className="w-5 h-5 text-white" />
          </div>
          Coll & Cool
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#services" className="hover:text-primary">
              Services
            </a>
          </li>
          <li>
            <a href="#areas" className="hover:text-primary">
              Service Areas
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary">
              About
            </a>
          </li>
          {/* <li>
            <a href="#testimonials" className="hover:text-primary">
              Reviews
            </a>
          </li> */}
          <li>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="tel:+919562994324"
          className="btn btn-primary btn-sm hidden sm:flex items-center gap-2"
        >
          <Phone size={16} />
          Call Now
        </a>
      </div>
    </header>
  );
};

export default Header;
