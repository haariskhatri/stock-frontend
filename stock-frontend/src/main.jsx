import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import IpoRegister from "./pages/IpoRegister";
import './App.css'
import BuySellCard from "./components/BuySellCard";
import MarketPage from "./pages/MarketPage";
import ReadMore from "./components/ReadMore";
import HomePage from "./pages/HomePage";
import { AdminDetailsPage } from "./pages/AdminDetailsPage";

const router = createBrowserRouter([

  {
    path: '/register',
    element: <IpoRegister />
  },
  {
    path: '/buy',
    element: <MarketPage />
  },
  {
    path: '/admindetail',
    element: <AdminDetailsPage />
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);