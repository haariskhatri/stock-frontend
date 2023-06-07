import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/Logo.png'
import WalletIcon from '@mui/icons-material/Wallet';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useEffect } from "react";

const NavBar = () => {
    const navigate = useNavigate()
    const [active, setactive] = useState(null)




    const logout = () => {
        fetch("/api/login/logout")
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    navigate('/Userlogin')
                } else {
                    toast.error('Error !')
                }
            })
    }


    return (
        <>
            <div className="stock-nav">
                <div className="container">
                    <nav>
                        <div className="logo">
                            <Link to='/home'><img src={logo} alt="" /></Link>
                        </div>
                        <div className="logo-title">
                            <h4>TradeTrek</h4>
                        </div>
                        <ul className="list-unstyled">
                            <li className={active === 0 ? 'active' : ''} onClick={() => { setactive(0) }}>Explore</li>
                            <li className={active === 1 ? 'active' : ''} onClick={() => { setactive(1) }} >Investments</li>
                        </ul>

                        <div className="search-bar">
                            <input type="text" placeholder="What are you searching for ?" />
                            <SearchIcon />
                        </div>
                        <div className="wallet">
                            <WalletIcon style={{ color: "white" }} />

                            <div className="wallet-balance">
                                {/* Current Balance : {new Intl('en-IN', { style: 'currency', currency: 'INR' }).format(0)} */}
                            </div>
                        </div>
                        <div className="logout-button">
                            <button><i class="fa-solid fa-right-from-bracket" onClick={logout}> </i>Log Out</button>
                        </div>
                    </nav>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default NavBar;