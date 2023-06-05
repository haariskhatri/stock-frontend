import React, { useEffect, useState } from 'react'
import axios from 'axios';


export const Getipolist = ({ setipodata }) => {
    var componyid;
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);

    useEffect(() => {
        getipo()

    }, [])

    const getipo = () => {
        fetch("/api/ipo/getallipos")
            .then(response => response.json())
            .then(data => {
                setData(data)
            }
            )



    }

    const getsingleipo = (id) => {
        console.log(id);
        axios.post('api/ipo/getipo', { 'companyId': id }).then((data) => {
            console.log(data.data);
            setipodata(data.data)
        })

    }

    return (

        <div className='container'>



            {data?.map((ipo, key) => {
                console.log(ipo.companyId);
                return (

                    <div className="card ipoadmin" key={key}>
                        <h5 className="card-title">{ipo.companyName}</h5>

                        <div className="card-body">
                            <h5 className="card-title">Bid Date :{ipo.companyStartdate} -{ipo.companyEnddate}</h5>
                            <p className="card-text">Price Range :{ipo.companyMinimumSlotSize}-{ipo.companyMaximumSlotSize}</p>
                            <p className="card-text">Min Shares </p>

                            <div className='buy-button'>

                                <button className="btn btn-primary" onClick={async () => { getsingleipo(ipo.companyId) }}>Apply</button>

                            </div>

                        </div>
                    </div>

                )
            })

            }

        </div>


    )
}

