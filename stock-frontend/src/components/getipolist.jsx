import React, { useEffect, useState } from 'react'


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
                console.log(data);
            }
            )



    }

    const getsingleipo = () => {
        fetch("/api/singleipo/" + componyid)
            .then(response => response.json())
            .then(data => setipodata(data))

    }

    return (

        <div className='container'>



            {data?.map((ipo, key) => {
                console.log(ipo)
                return (

                    <div className="card ipoadmin" key={key}>
                        <h5 className="card-title">{ipo.companyName}</h5>

                        <div className="card-body">
                            <h5 className="card-title">Bid Date :{ipo.companyStartdate} -{ipo.companyEnddate}</h5>
                            <p className="card-text">Price Range :{ipo.companyMinimumSlotSize}-{ipo.companyMaximumSlotSize}</p>
                            <p className="card-text">Min Shares </p>

                            <div className='buy-button'>

                                <button className="btn btn-primary" onClick={() => { componyid = ipo.companyId; getsingleipo() }}>Apply</button>

                            </div>

                        </div>
                    </div>

                )
            })

            }

        </div>


    )
}
