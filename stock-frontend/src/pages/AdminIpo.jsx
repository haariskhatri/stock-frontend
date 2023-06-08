import React,{useEffect, useState} from 'react'
import { IpoAdmin } from '../components/IpoAdmin'
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import SideMenu from '../components/sidemenu';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export const Adminipo = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        checkadmin();
    },[])
    const checkadmin=()=>{
        fetch("/api/adminlogin/checkadmin")
        .then(response => response.json())
        .then(data => {
            if (data.success) {

            } else {
                navigate('/admin')
                toast.error('You Are Not Admin')
            }
        })
    }

    return (
        <>
             <div className="ipo-register">
                <div className="container">
                 
                    <div className="row">
                        <div className="col-md-3">
                            <SideMenu />
                        </div>
                        <div className="col-md-9">
                            <IpoAdmin />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <ToastContainer/>
        </>
    )
}
