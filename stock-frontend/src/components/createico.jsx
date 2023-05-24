import React, { useState } from "react";

const CreateICO = () => {

    const [ico, setico] = useState({
        companyName: '',
        companySymbol: '',
        companyPrice: '',
        companyUnits: '',
        companyValuation: ''
    })


    const handlechange = (event) => {

        const { name, value } = event.target;

        setico((prev) => {
            return { ...prev, [name]: value }
        })


    }

    const createico = (e) => {

        e.preventdefault();
        console.log(ico);

    }

    return (
        <>
            <div className="row">
                <div className="ico-form">
                    <form onSubmit={createico}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" onChange={handlechange} placeholder="" name="companyName" value={ico.companyName} autoFocus />
                            <label htmlFor="floatingInput">Company Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" onChange={handlechange} placeholder="" name="companySymbol" value={ico.companySymbol} autoFocus />
                            <label htmlFor="floatingInput">Symbol</label>
                        </div>



                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingInput" onChange={handlechange} placeholder="" name="companyUnits" value={ico.companyUnits} />
                                    <label htmlFor="floatingInput">Units</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingInput" onChange={handlechange} placeholder="" name="companyPrice" value={ico.companyPrice} />
                                    <label htmlFor="floatingInput">Value per Share</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingPassword" onChange={handlechange} placeholder="Password" readOnly
                                value={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(ico.companyPrice * ico.companyUnits)} />
                            <label htmlFor="floatingPassword">Total Valuation</label>
                        </div>
                        <button className="ico-button" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateICO