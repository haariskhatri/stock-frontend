import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateICO = () => {

    const [ipo, setipo] = useState({
        companyName: '',
        companySymbol: '',
        companyPrice: '',
        companyUnits: ''
    })

    const handlechange = (event) => {

        const { name, value } = event.target;

        setipo((prev) => {
            return { ...prev, [name]: value }
        })


    }


    const createico = (e) => {

        e.preventDefault();
        const isValueNull = Object.values(ipo).some(value => value == '' || value == null);
        const isZero = Object.values(ipo).some(value => value === 0);



        if (!isValueNull) {
            toast.success('Working')
        }
        else if (isZero) {
            toast.error('Value cannot be Zero')
        }
        else {
            toast.error('Values cannot be Empty')
        }

    }

    return (
        <>
            <div className="row">
                <div className="ico-form">
                    <form onSubmit={createico}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" onChange={handlechange} placeholder="" name="companyName" value={ipo.companyName} autoFocus />
                            <label htmlFor="floatingInput">Company Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" onChange={handlechange} placeholder="" name="companySymbol" value={ipo.companySymbol} autoFocus />
                            <label htmlFor="floatingInput">Symbol</label>
                        </div>



                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingInput" onChange={handlechange} placeholder="" name="companyUnits"
                                        value={ipo.companyUnits} />
                                    <label htmlFor="floatingInput">Units</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingInput" onChange={handlechange} placeholder="" name="companyPrice" value={ipo.companyPrice} />
                                    <label htmlFor="floatingInput">Value per Share</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingPassword" onChange={handlechange} placeholder="Password" readOnly
                                value={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(ipo.companyPrice * ipo.companyUnits)} />
                            <label htmlFor="floatingPassword">Total Valuation</label>
                        </div>
                        <button className="ico-button" type="submit">
                            Submit
                        </button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default CreateICO