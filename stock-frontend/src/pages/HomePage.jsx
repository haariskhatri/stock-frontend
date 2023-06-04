import React from 'react'
import { Iposubscribe } from '../components/iposubscribe';
import NavBar from '../components/navbar';

import tata from '../assets/tata.png';

import '../assets/css/homepage.css'

const HomePage = () => {

    const company = [{
        companyName: 'TATA',
        companyLogo: '../assets/tata.png'
    }]

    return (
        <>
            <NavBar />
            <div className="home">
                <div className="container">
                    <div className="col-md-8">
                        <div className="stock-title">
                            Stocks
                        </div>
                        <ul className="stock-tiles list-unstyled">

                        </ul>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage;