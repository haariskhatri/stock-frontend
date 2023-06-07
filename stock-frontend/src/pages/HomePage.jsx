import React from 'react'
import { Iposubscribe } from '../components/iposubscribe';
import NavBar from '../components/Navbar';

import tata from '../assets/tata.png';

import '../assets/css/homepage.css'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import { useState } from 'react';
import { PreLoader } from '../components/PreLoader';
import { useEffect } from 'react';
import { StockTable } from '../components/StockTable';

import io from 'socket.io-client'
import { Getinvestment } from '../components/getinvestment';
const socket = io("http://localhost:8000", {
    autoConnect: false
});

const HomePage = () => {

    const [company, setcompany] = useState();
    const [userid, setuserid] = useState();
    const [invested, setinvested] = useState();
    const [userbalance, setuserbalance] = useState();


    const [aapduloader, setaapduloader] = useState(true);
    const [ipos, setipos] = useState();
    const [topshares, settopshares] = useState();





    useEffect(() => {



        axios.get('/api/share/getshares').then((data) => {
            console.log(data.data);
            setcompany((data.data.slice(0, 4)));


        })

        axios.get('/api/ipo/getallipos').then((data) => {
            console.log(data.data);
            const set = data.data;
            setipos(set.slice(0, 4));




        })


        axios.get('/api/share/gettopshares').then((data) => {
            const set = data.data;
            settopshares(set.slice(0, 10));
            console.log(set);


        })


    }, []);

    useEffect(() => {

        socket.connect();
        axios.get('/api/login/usernow').then((data) => {
            setuserid(data.data.id)



            socket.emit('investment', data.data.id);


        })

        socket.on('userbalance', () => {
            axios.get(`/api/user/getuserbalance`).then((data) => {
                setuserbalance(data.data)
                console.log('socket ', data.data)
            })
        })

        socket.on('detail', (data) => {
            const result = data.data;
            setcompany(result);
        })

        return () => {
            socket.off('investment');
            socket.off('detail');
            socket.off('userbalance');
        }

    }, [socket])


    const openloader = () => {
        setloader(true);
    }

    return (
        <>
            <NavBar userbalance={userbalance} />
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="stock-title">
                                Stocks
                                <div className="view-more">
                                    <Link to='/sharelist'>View More</Link>
                                </div>
                            </div>
                            <ul className="stock-tiles list-unstyled">

                                {
                                    company?.map((ele, index) => (
                                        <li key={index}>
                                            <img src={`/public/${ele.shareSymbol}.png`} />
                                            <Link to={`/detail/${ele.shareId}`}>{ele.shareName}</Link>
                                            <div className="stock-price">
                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(ele.sharePrice)}
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

                                        <Link to='/getipo'>{ele.companyName}</Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="stock-title">
                                Top Shares
                            </div>

                            <StockTable topshares={topshares} />


                        </div>
                        <div className="col-md-4">
                            <Getinvestment setloader={setaapduloader} />

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
            {aapduloader && <PreLoader />}
        </>
    )
}

export default HomePage;