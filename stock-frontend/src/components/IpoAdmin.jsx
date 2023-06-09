import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PreLoader } from './PreLoader';

export const IpoAdmin = () => {
    const [data, setData] = useState([]);
    const [loader,setloader]=useState(true)
    
    var componyId ;
    const navigate = useNavigate()

    useEffect(() => {
        getipo()

    }, [])

    const getipo = () => {
        fetch("/api/ipo/getipo")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (!data.success) {
                    alert(data.message)
                    setloader(false)
                    navigate('/adminlogin')
                } else {
                    setData(data)
                    setloader(false)
                }
            })
    }


    const allocate_slot = () => {
        setloader(true)
        fetch("/api/adminlogin/allocation_slot/"+componyId)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.success) {
                alert(data.message)
                getipo()
                setloader(false)
            }
        })
    }

    const cancel_ipo = () => {
        setloader(true)
        fetch("/api/adminlogin/cancelipo/"+componyId)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.success) {
                alert(data.message)
                getipo()
                setloader(false)
            }
        })
    }

    return (
        <div className='container'>
            <center><h3 className='card-title'>Compony Ipo</h3></center>

            {console.log(data)}
            {data?.ipo?.map((ipo, key) => {
                
                return(
                    <div className="card ipoadmin">
                        <h5 className="card-title">{ipo.companyName}</h5>
                        <div className="card-body">
                            <h5 className="card-title">Raise Money 10000000 Rs</h5>
                            <p className="card-text">Total Subscriber 90/100</p>
                            <div className='buy-button'>

                                <button className="btn btn-primary" onClick={()=>{componyId=ipo.companyId; allocate_slot()}}>Allocate Slot</button>
                                <button className="btn btn-primary" onClick={()=>{componyId=ipo.companyId; cancel_ipo()}}>Cancel IPO</button>
                            </div>

                        </div>
                    </div>
                )
            })}
            {
                loader && <PreLoader/>
            }
        </div>
    )
}
