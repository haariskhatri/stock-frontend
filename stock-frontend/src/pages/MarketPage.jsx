import React, { useEffect } from "react";
import MarketOrder from "../components/BuySellCard";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import RelianceLogo from '../assets/reliance-logo.png'
import StockChart from "../components/StockChart";
import CompanyProfile from "../components/CompanyProfile";
import PerformanceComponent from "../components/PerformanceComponent";
import FundamentalsComponent from "../components/FundamentalsComponent";




const MarketPage = () => {

    useEffect(() => {
        document.title = `Reliance Power Share Price Today`
    }, [])


    return (
        <>
            <div className="market-page">
                <div className="container">
                    <div className="row">
                        <NavBar />
                    </div>
                    <div className="row">
                        <div className="col-md-8">

                            <div className="company-info">
                                <img src={RelianceLogo} />
                            </div>

                            <div className="company-detail">
                                <div className="company-name">
                                    Reliance Power
                                </div>
                                <div className="company-category">
                                    Energy
                                </div>


                            </div>
                            <StockChart />
                            <PerformanceComponent />
                            <FundamentalsComponent />
                            <div style={{ color: '#b0b2ba' }}>
                                Understanding Fundamentals <i className="fa-solid fa-circle-info"></i>
                            </div>

                            <CompanyProfile />



                        </div>
                        <div className="col-md-4">
                            <div className="market-order">
                                <MarketOrder />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MarketPage;