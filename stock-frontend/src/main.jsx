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
import { Getipodata } from "./pages/Getipodata";
import { GetSharesList } from "./pages/GetSharesList";
import { UserRegistration } from "./pages/UserRegistration";
import { AdminCompony } from "./pages/AdminCompony";
import { Getinvestment } from "./components/getinvestment";
import { SharesList } from "./components/SharesList";
import Maketdepth from './components/Marketdepth'


const router = createBrowserRouter([

  {
    path: '/sharelist',
    element: <SharesList />
  },
  {
    path: '/market',
    element: <Maketdepth />
  },
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
    path: '/getinvest',
    element: <Getinvestment />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // {/* </React.StrictMode> */}
);