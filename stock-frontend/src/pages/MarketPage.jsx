import React, { useEffect } from "react";
import MarketOrder from "../components/BuySellCard";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import RelianceLogo from '../assets/reliance-logo.png'
import StockChart from "../components/StockChart";
import CompanyProfile from "../components/CompanyProfile";
import PerformanceComponent from "../components/PerformanceComponent";
import FundamentalsComponent from "../components/FundamentalsComponent";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { PreLoader } from "../components/PreLoader";




const MarketPage = () => {

    const { companyId } = useParams();
    console.log(companyId)
    const [company, setcompany] = useState()
    const [showloader, setloader] = useState(true);

    useEffect(() => {

        axios.post('/api/share/getshare', { 'shareId': companyId }).then((data) => {
            console.log(data.data);
            setcompany(data.data);
            setloader(false);
            // document.title = `${company.companyName} Share Price Today`
        })
    }, [])


    return (
        <>
            {company ?
                <div className="market-page">
                    <div className="container">
                        <div className="row">
                            <NavBar />
                        </div>
                        <div className="row">
                            <div className="col-md-8">

                                <div className="company-info">
                                    <img src={`/public/${company.shareSymbol}.png`} />
                                </div>

                                <div className="company-detail">
                                    <div className="company-name">
                                        {company.shareName}
                                    </div>
                                    <div className="company-category">
                                        {company.category}
                                    </div>


                                </div>
                                <StockChart />
                                <PerformanceComponent />
                                <FundamentalsComponent />
                                <div style={{ color: '#b0b2ba' }}>
                                    Understanding Fundamentals <i className="fa-solid fa-circle-info"></i>
                                </div>

                                <CompanyProfile description={company.description} name={company.shareName} />



                            </div>
                            <div className="col-md-4">
                                <div className="market-order">
                                    <MarketOrder company={company} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <>Company Not Found</>
            }
            {showloader && <PreLoader />}
            <Footer />

        </>
    )
}

export default MarketPage;