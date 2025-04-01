import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { auth } from "../components/firebaseauth/Firebase";

function Layout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
  const isDashboardPage = location.pathname === "/dashboard"; // ✅ Check for Dashboard page

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Define menu items dynamically
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  if (user) {
    menuItems.push({ label: "Dashboard", href: "/dashboard" }); // ✅ Show Dashboard when logged in
  }

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <Header menuItems={menuItems} />} {/* ✅ Header is always shown except for login/signup */}
      
      <div className="flex-grow">
        <Outlet />
      </div>

      {!isAuthPage && !isDashboardPage && !['/dashboard','/mentorship', '/internship-job', '/donation', '/events', '/complprofile', '/inbox', '/trash', '/settings'].includes(location.pathname) && <Footer />}
</div>
  );
}

export default Layout;
