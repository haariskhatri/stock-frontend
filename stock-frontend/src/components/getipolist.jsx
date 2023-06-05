import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import axios from 'axios';
>>>>>>> 238caf7929628a5769046706f4b1dd8262f08dda


export const Getipolist = ({ setipodata }) => {
    var componyid;
    const navigate=useNavigate();

    const [data, setData] = useState([]);
   

    useEffect(() => {
        getipo()

    }, [])

    const getipo = () => {
<<<<<<< HEAD
        fetch("/api/ipo/getipo")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(!data.success) {
                    alert(data.message)
                    navigate('/Userlogin')
                } else{
                    setData(data)
                }
            })
    }

    const getsingleipo = () => {
        fetch("/api/ipo/singleipo/" + componyid)
        .then(response => response.json())
        .then(data => {
            if(!data.success) {
                alert(data.message)
                navigate('/Userlogin')
            } else{
                setipodata(data)
            }
=======
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
>>>>>>> 238caf7929628a5769046706f4b1dd8262f08dda
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

