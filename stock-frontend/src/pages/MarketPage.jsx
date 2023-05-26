import React from "react";
import MarketOrder from "../components/BuySellCard";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import RelianceLogo from '../assets/reliance-logo.png'
import StockChart from "../components/StockChart";
import CompanyProfile from "../components/CompanyProfile";



const MarketPage = () => {



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