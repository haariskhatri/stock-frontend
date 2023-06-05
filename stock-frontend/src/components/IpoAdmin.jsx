import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const IpoAdmin = () => {
    const [data, setData] = useState("");
    const ipo_id = 100;
    const navigate=useNavigate()

    const allocate_slot = () => {
        fetch("/api/ipo/getiposub/" + ipo_id)
        .then(response => response.json())
        .then(data => {
            if(!data.success) {
                alert(data.message)
                navigate('/Userlogin')
            } else{
                setData(data)
            }
        })

    }

    const cancel_ipo = () => {
        console.log("THis is cancel ipo")
    }

    return (
        <div className='container'>
            <center><h3 className='card-title'>Adani Power</h3></center>
            <div className="card ipoadmin">
                <h5 className="card-title">IPO 1</h5>
                <div className="card-body">
                    <h5 className="card-title">Raise Money 10000000 Rs</h5>
                    <p className="card-text">Total Subscriber 90/100</p>
                    <div className='buy-button'>

                        <button className="btn btn-primary" onClick={allocate_slot}>Allocate Slot</button>
                        <button className="btn btn-primary" onClick={cancel_ipo}>Cancel IPO</button>
                    </div>

                </div>
            </div>
            <div className="card ipoadmin">
                <h5 className="card-title">IPO 2</h5>
                <div className="card-body">
                    <h5 className="card-title">Raise Money 12300000 Rs</h5>
                    <p className="card-text">Total Subscriber 70/100</p>
                    <div className='buy-button'>

                        <button className="btn btn-primary" onClick={allocate_slot}>Allocate Slot</button>
                        <button className="btn btn-primary" onClick={cancel_ipo}>Cancel IPO</button>
                    </div>

                </div>
            </div>
            <div className="card ipoadmin">
                <h5 className="card-title">IPO 3</h5>
                <div className="card-body">
                    <h5 className="card-title">Raise Money 19880000 Rs</h5>
                    <p className="card-text">Total Subscriber 89/100</p>
                    <div className='buy-button'>

                        <button className="btn btn-primary" onClick={allocate_slot}>Allocate Slot</button>
                        <button className="btn btn-primary" onClick={cancel_ipo}>Cancel IPO</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
