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
import { IpoAdmin } from "./components/IpoAdmin";
import { Getipolist } from "./components/getipolist";
import { Getipodata } from "./pages/Getipodata";


const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: '/register',
    element: <IpoRegister />
  },
  {
    path: '/buy',
    element: <MarketPage />
  },
  {
    path: '/ipo',
    element: <IpoAdmin />
  },
  {
    path: '/getipo',
    element: <Getipodata />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);