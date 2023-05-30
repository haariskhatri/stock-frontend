import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const CreateIPO = () => {

    const addIpo = (e) => {
        e.preventDefault();

    }

    const [company, setCompany] = useState({
        companyId: '',
        companyName: '',
        companySymbol: '',
        companyShares: '',
        companyValuepershare: '',
        companyValuation: '',
        companyStartdate: '',
        companyEnddate: '',
        companyDescription: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCompany((prev) => {
            return { ...prev, [name]: value }
        })
    }



    return (
        <>
            <div className="create-ipo">
                <form className='ipo-form' onSubmit={addIpo} >



                    <div className="col-lg-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder=" " readOnly
                                value='1'
                            />
                            <label for="floatingInput">IPO ID</label>
                        </div>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder=" "
                            name='companyName'
                            onChange={handleChange}
                            value={company.companyName}
                        />
                        <label for="floatingInput">Company Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder=" "
                            name='companySymbol'
                            onChange={handleChange}
                            value={company.companySymbol}
                        />
                        <label for="floatingInput">Company Symbol</label>
                    </div>


                    <div className="col-lg-12">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder=" "

                                name='companyValuation'
                                onChange={handleChange}
                                value={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(company.companyShares * company.companyValuepershare)}
                            />
                            <label for="floatingInput">Valuation</label>
                        </div>
                    </div>



                    <div className="row">

                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" "
                                    name='companyShares'
                                    onChange={handleChange}
                                    value={company.companyShares}
                                />
                                <label for="floatingInput">Shares</label>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" "
                                    name='companyValuepershare'
                                    onChange={handleChange}
                                    value={company.companyValuepershare}
                                />

                                <label for="floatingInput">Value Per Share</label>
                            </div>

                        </div>

                        <div className="col-lg-12">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" " readOnly

                                    value={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(company.companyShares * company.companyValuepershare)}
                                />
                                <label for="floatingInput">Valuation</label>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" " readOnly
                                    value={(company.companyShares * company.companyValuepershare) / 14000}
                                />
                                <label for="floatingInput">Slots</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" " readOnly defaultValue={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(14000)} />
                                <label for="floatingInput">Value per Slot</label>
                            </div>

                        </div>


                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="floatingInput" placeholder=" "
                                    name='companyStartdate'
                                    onChange={handleChange}
                                    value={company.companyStartdate}
                                />
                                <label for="floatingInput">Start Date</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="floatingInput" placeholder=" "
                                    name='companyEnddate'
                                    onChange={handleChange}
                                    value={company.companyEnddate}
                                />
                                <label for="floatingInput">Deadline</label>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="floatingInput" placeholder=" " style={{ height: '200px' }}
                                    name='companyDescription'
                                    onChange={handleChange}
                                    value={company.companyDescription}
                                />
                                <label for="floatingInput">Description</label>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <button className='form-submit-btn' type='submit'>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>



        </>
    )
}


export default CreateIPO;