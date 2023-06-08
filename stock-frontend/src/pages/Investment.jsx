import React,{useEffect, useState} from 'react'
import { IpoAdmin } from '../components/IpoAdmin'
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import { Getinvestment } from '../components/getinvestment';

export const Investment = () => {
    return (
        <>
            <div className="market-page">
                <div className="container">
                    <div className="row">
                        <NavBar />
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            <Getinvestment/>

                        </div>
                        <div className="col-md-4">
                            <div className="market-order">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
