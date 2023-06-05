import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/Logo.png'
import WalletIcon from '@mui/icons-material/Wallet';
import { Link } from "react-router-dom";

const NavBar = () => {

    const [active, setactive] = useState(null)



    return (
        <>
            <div className="stock-nav">
                <div className="container">
                    <nav>
                        <div className="logo">
                            <Link to='/'><img src={logo} alt="" /></Link>
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
                        <WalletIcon style={{ color: "white" }} />
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar;