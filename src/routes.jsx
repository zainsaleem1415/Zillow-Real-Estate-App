// src/routes.js
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Buy from "./pages/Buy/Buy";
import Advertise from "./pages/Advertise/Advertise";
import Findagent from "./pages/FindAgent/Findagent";
import Help from "./pages/Help/Help";
import Sell from "./pages/Sell/Sell";
import Rent from "./pages/Rent/Rent";
import Login from "./pages/Login";

import Mortgage from "./pages/Mortgage/Mortgage";
import Managerentals from "./pages/ManageRentals/Managerentals";
const routes = [
  {
    path: "/",
    element: <MainLayout />, // Layout wraps the pages
    children: [
      { path: "/", element: <Home /> },
      { path: "/advertise", element: <Advertise /> },
      { path: "/findagent", element: <Findagent /> },
      { path: "/help", element: <Help /> },
      { path: "/sell", element: <Sell /> },
      { path: "/buy", element: <Buy /> },
      { path: "/rent", element: <Rent /> },
      { path: "/login", element: <Login/> },
      { path: "/mortgage", element: <Mortgage /> },
      { path: "/managerentals", element: <Managerentals /> },
    ],
  },
];

export default routes;
