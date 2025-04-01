import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Navbar";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <Router>  {/* ✅ Wrap everything inside <Router> */}
      <Header
        
        menuItems={[
          { label: "Home", href: "/" },    
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <Home/>
      <Footer />
    </Router>
  );
}

export default App;
