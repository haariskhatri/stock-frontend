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
import { GetSharesList } from "./pages/GetSharesList";
import { UserRegistration } from "./pages/UserRegistration";
import { AdminCompony } from "./pages/AdminCompony";
import { Getinvestment } from "./components/getinvestment";


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
    path: '/',
    element: <UserRegistration />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/getipo',
    element: <Getipodata />
  },
  {
    path: '/getshares',
    element: <GetSharesList />
  },
  {
    path: '/detail/:companyId',
    element: <MarketPage />
  },
  {
    path: '/admincompony',
    element: <AdminCompony />
  },
  {
    path: '/Userlogin',
    element: <UserRegistration />
  },
  {
    path: '/getinvest',
    element: <Getinvestment />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // {/* </React.StrictMode> */}
);