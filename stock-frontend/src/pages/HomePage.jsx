import React from 'react'
import { Iposubscribe } from '../components/iposubscribe';
import NavBar from '../components/navbar';

import tata from '../assets/tata.png';

import '../assets/css/homepage.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import { useState } from 'react';
import { PreLoader } from '../components/PreLoader';
import { useEffect } from 'react';

const HomePage = () => {

    const company = [{
        companyName: 'TATA',
        companyLogo: '/public/TATA.png',
        companyPrice: '70'
    },
    {
        companyName: 'ADANI',
        companyLogo: '/public/ADANI.png',
        companyPrice: '70'
    },
    {
        companyName: 'RELIANCE',
        companyLogo: '/public/RELIANCE.png',
        companyPrice: '70'
    },
    {
        companyName: 'MARUTI SUZUKI',
        companyLogo: '/public/MARUTI.png',
        companyPrice: '70'
    },
    ]

    const [loader, setloader] = useState(true);
    const [ipos, setipos] = useState();

    useEffect(() => {

        axios.get('api/ipo/getallipos').then((data) => {
            console.log(data.data);
            setipos((data.data).slice(0, 4))
            setloader(false)
        })
    }, [])



    const openloader = () => {
        setloader(true);
    }

    return (
        <>
            <NavBar />
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="stock-title">
                                Stocks
                                <div className="view-more">
                                    <Link to='/'>View More</Link>
                                </div>
                            </div>
                            <ul className="stock-tiles list-unstyled">
                                {
                                    company.map((ele, index) => (
                                        <li key={index}>
                                            <img src={ele.companyLogo} />
                                            {ele.companyName}
                                            <div className="stock-price">
                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(ele.companyPrice)}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="ipocard stock-title">
                                IPO
                                <div className="view-more">
                                    <Link to='/getipo'>View More</Link>
                                </div>
                            </div>
                            <ul className="stock-tiles list-unstyled">
                                {ipos?.map((ele, index) => (
                                    <li key={index}>
                                        {ele.companyName}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="your-investments">
                                Your Investments
                            </div>
                            <div className="user-balance">
                                <div className="user-value">
                                    <div className="value-left">
                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(0)}<br />
                                        <div className="value-text">Invested Value</div>
                                    </div>

                                    <div className="value-right text-end">
                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(0)} <br />
                                        <div className="value-text">Current Value</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
            {loader && <PreLoader />}
        </>
    )
}

export default HomePage;