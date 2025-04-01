import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { auth } from "../firebaseauth/Firebase"; // Import Firebase auth
import { Button, IconButton } from "@material-tailwind/react";

const Navbar = ({ brandName = "Alu-Hive" }) => {
  const [openNav, setOpenNav] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, []);

  // Menu Items
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  if (user) {
    menuItems.push({ label: "Dashboard", href: "/dashboard" });
  }

  const navList = (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
      {menuItems.map((item, index) => (
        <li key={index} className="group relative">
          <NavLink
            to={item.href}
            className={({ isActive }) =>
              `font-medium transition duration-300 
              ${isActive ? "bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent" : "text-white hover:bg-gradient-to-r hover:from-sky-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"}`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
  
            
           
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-black via-gray-900 to-black shadow-lg border-b dark:bg-gray-900/80">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Brand Name / Logo */}
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
          <Link to="/" className="text-3xl font-extrabold tracking-wide">
            {brandName}
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:block">{navList}</nav>

        {/* Auth Buttons & Mobile Menu Icon */}
        <div className="flex items-center gap-4" aria-label="User actions">
          {!user ? (
            <>
              <Button
                variant="text"
                className="text-gray-200 hover:text-sky-400 transition duration-200"
              >
                <Link to="/login">Log In</Link>
              </Button>
              <Button
                variant="gradient"
                className="bg-teal-600 text-white hover:bg-teal-500 transition duration-200"
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          ) : (
            <Button
              variant="text"
              className="text-gray-200 hover:text-red-500 transition duration-200"
              onClick={() => auth.signOut()}
            >
              Logout
            </Button>
          )}

          {/* Mobile Menu Icon */}
          <IconButton
            variant="text"
            className="lg:hidden text-gray-200 transition duration-300 hover:text-sky-400"
            onClick={() => setOpenNav(!openNav)}
            aria-expanded={openNav}
            aria-label="Toggle navigation"
          >
            <motion.svg
              initial={{ rotate: openNav ? 180 : 0 }}
              animate={{ rotate: openNav ? 0 : 180 }}
              transition={{ duration: 0.2 }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-4 6H4" />
            </motion.svg>
          </IconButton>
        </div>
      </div>

      {/* Mobile Navigation */}
      {openNav && (
        <div className="lg:hidden bg-gray-900/80 backdrop-filter backdrop-blur-lg p-4 border-t border-gray-700">
          {navList}
          {!user ? (
            <div className="flex flex-col mt-4 gap-2">
              <Button
                fullWidth
                variant="text"
                className="text-gray-200 hover:text-sky-400 transition duration-200"
              >
                <Link to="/login">Log In</Link>
              </Button>
              <Button
                fullWidth
                variant="gradient"
                className="bg-teal-600 text-white hover:bg-teal-500 transition duration-200"
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          ) : (
            <Button
              fullWidth
              variant="text"
              className="text-gray-200 hover:text-red-500 transition duration-200"
              onClick={() => auth.signOut()}
            >
              Logout
            </Button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
