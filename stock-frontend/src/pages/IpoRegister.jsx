import { useState } from 'react'


import NavBar from '../components/navbar';
import CreateIPO from '../components/CreateIPO';
import SideMenu from '../components/sidemenu';
import Footer from '../components/Footer';
import { useEffect } from 'react';


const IpoRegister = () => {

    useEffect(() => {
        document.title = 'Admin Page'
    }, [])


    return (
        <>
            <div className="ipo-register">
                <div className="container">
                    <NavBar />
                    <div className="row">
                        <div className="col-md-3">
                            <SideMenu />
                        </div>
                        <div className="col-md-9">
                            <CreateIPO />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default IpoRegister;
