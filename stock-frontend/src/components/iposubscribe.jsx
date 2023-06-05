import React, { useEffect, useState } from "react";


export const Iposubscribe = ({ ipodata }) => {
    var ipo_id;
    var userid = 5;
    const iposub = () => {
        const response = fetch('/api/ipo/iposub', {
            method: 'post',
            body: JSON.stringify({
                ipo_id: ipo_id,
                userid: userid
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then(async () => {
                setIsLoading(false)
                document.getElementsByTagName('body')[0].style.overflow = 'visible';
                alert("buy complete")
                window.location.reload(true)

            })
    }

    return (
        <>
            <div className="container">
                <div className="buy-sell-card">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{ipodata?.singleipo?.companyName}</h5>

                        </div>

                        <div className="card-main-body">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Bid</button>

                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                                    <form >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="buy-menu">
                                                    <div className="stock-quantity">

                                                        <label htmlFor="stockQuantity">Shares</label>
                                                        <input type="number" name="stockQuantity" value={ipodata?.singleipo?.companyMinimumSlotSize} readOnly />
                                                    </div>


                                                    <div className="stock-price-limit price-market">
                                                        <label>Bid Price</label>
                                                        <input type="text" name="stockPriceLimit" value={ipodata?.singleipo?.companyValuepershare} readOnly />
                                                    </div>


                                                </div>
                                                <div className="order-execute-line">
                                                    <p>Order will be executed for {ipodata?.singleipo?.companyMinimumSlotSize} Shares</p>
                                                </div>

                                                <div className="buy-footer">
                                                    <p>Balance : {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(0)} </p>
                                                    <p>Required : {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(ipodata?.singleipo?.companyValuepershare * ipodata?.singleipo?.companyMinimumSlotSize)} </p>
                                                </div>

                                                <div className="buy-button">
                                                    <button onClick={() => { ipo_id = ipodata?.singleipo?.companyId; iposub() }}>
                                                        Subscribe
                                                    </button>
                                                </div>


                                            </div>
                                        </div>
                                    </form>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
