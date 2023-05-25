import React from "react";
import MarketOrder from "../components/BuySellCard";
import NavBar from "../components/navbar";

const MarketPage = () => {



    return (
        <>
            <div className="container">
                <div className="row">
                    <NavBar />
                </div>
                <div className="row">
                    <div className="col-md-8">
                    </div>
                    <div className="col-md-4">
                        <div className="market-order">
                            <MarketOrder />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarketPage;