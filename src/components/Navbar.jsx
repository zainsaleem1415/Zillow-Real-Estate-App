// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border border-black  flex justify-around py-6 items-center">
      <Link to="/">Home</Link>
      <Link to="/buy">Buy</Link>
      <Link to="/advertise">Advertise</Link>
      <Link to="/findagent">Find an Agent</Link>
      <Link to="/rent">Rent</Link>
      <Link to="/help">Help</Link>
      <Link to="/sell">Sell</Link>
      <Link to="/mortgage">Mortgage</Link>
      <Link to="/managerentals">Manage Rentals</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
