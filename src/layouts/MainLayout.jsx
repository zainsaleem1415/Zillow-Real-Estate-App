// src/layouts/MainLayout.jsx
// import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div >
              <Outlet /> {/* This renders the child routes */}
      </div>
    </div>
  );
};

export default MainLayout;
