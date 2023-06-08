import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/Logo.png'
import WalletIcon from '@mui/icons-material/Wallet';
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useEffect } from "react";
import io from 'socket.io-client'
import { Getinvestment } from '../components/getinvestment';
const socket = io("http://localhost:8000", {
    autoConnect: false
});



const NavBar = (props) => {
    const navigate = useNavigate()

    const [active, setactive] = useState(null)
    const [userbalance, setuserbalance] = useState();




    const logout = () => {
        fetch("/api/login/logout")
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    navigate('/')
                } else {
                    toast.error('Error !')
                }
            })
    }

    useEffect(() => {

        socket.connect();
        axios.get(`/api/user/getuserbalance`).then((data) => {
            setuserbalance(data.data)
            console.log('initial', data.data);
        })

        socket.on('userbalance', () => {
            console.log('update');
            axios.get(`/api/user/getuserbalance`).then((data) => {
                setuserbalance(data.data)
            })
        })

        return () => {
            socket.off('userbalance');
        }
    }, [socket])




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
                        {/* <NavBar>
                            <Link>Explore</Link>
                            <Link>Investment</Link>
                            <Link>Explore</Link>

                        </NavBar> */}
                        {/* <nav className="list-unstyled">
                            <NavLink to='/home'>Explore</NavLink>
                            <NavLink to='/Investment'>Investment</NavLink>
                            <NavLink to='/History'>History</NavLink>
                        </nav> */}
                        <ul className="list-unstyled">
                            <li className={active === 0 ? 'active' : ''} onClick={() => { setactive(0) ;navigate('/home') }}>Explore</li>
                            <li className={active === 1 ? 'active' : ''} onClick={() => { setactive(1); navigate('/Investment') }} >Investments</li>
                            <li className={active === 2 ? 'active' : ''} onClick={() => { setactive(2); navigate('/History') }} >History</li>
                            
                        </ul>

                        <div className="search-bar">
                            <input type="text" placeholder="What are you searching for ?" />
                            <SearchIcon />
                        </div>
                        <div className="wallet">
                            <WalletIcon style={{ color: "white" }} />

                            <div className="wallet-balance">
                                Current Balance : {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(userbalance)}

                            </div>
                        </div>
                        <div className="logout-button">
                            <button><i className="fa-solid fa-right-from-bracket" onClick={logout}> </i>Log Out</button>
                        </div>
                    </nav>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default NavBar;