import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const CreateIPO = () => {

    const addIpo = async (e) => {
        e.preventDefault();

        const saved = await axios.post('http://localhost:4000/addipo', company)
        console.log(saved);

        setCompany({
            companyId: '',
            companyName: '',
            companyLogo: '',
            companySymbol: '',
            companyShares: '',
            companyValuepershare: '',
            companyMinimumSlotSize: '',
            companyMaximumSlotSize: '',
            companyMaximumSlotsAllowed: '',
            companyValuation: '',
            companyStartdate: '',
            companyEnddate: '',
            companyDescription: ''
        })

    }

    const [company, setCompany] = useState({
        companyId: '',
        companyName: '',
        companyLogo: '',
        companySymbol: '',
        companyShares: '',
        companyValuepershare: '',
        companyMinimumSlotSize: '',
        companyMaximumSlotSize: '',
        companyMaximumSlotsAllowed: '',
        companyValuation: '',
        companyStartdate: '',
        companyEnddate: '',
        companyDescription: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        console.log(name + " " + value);

        setCompany((prev) => {
            return { ...prev, [name]: value }
        })
    }

    useEffect(() => {

        const func = async () => {

            const id = await axios.get('http://localhost:4000/getid');
            const finalid = id.data.id;



            setCompany((prev) => {
                return { ...prev, ['companyId']: finalid }
            })
        }
        func()
    }, [company])

    return (
        <>
            <div className="create-ipo">
                <form className='ipo-form' onSubmit={addIpo} >



                    <div className="col-lg-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder=" " readOnly
                                value={company.companyId}
                            />
                            <label for="floatingInput">IPO ID</label>
                        </div>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder=" " required
                            name='companyName'
                            onChange={handleChange}
                            value={company.companyName}
                        />
                        <label for="floatingInput">Company Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder=" " required
                            name='companySymbol'
                            onChange={handleChange}
                            value={company.companySymbol}
                        />
                        <label for="floatingInput">Company Symbol</label>
                    </div>

                    <div className="form-floating mb-3">
                        <label for="formFile" class="form-label">Logo</label>
                        <input class="form-control" type="file" id="formFile"
                            name='companyLogo'
                            value={company.companyLogo}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="col-lg-12">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder=" " required

                                name='companyValuation'
                                onChange={handleChange}
                                value={(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format((company.companyShares * company.companyValuepershare) / 10000000) + ' Cr')}

                            />
                            <label for="floatingInput">Valuation</label>
                        </div>
                    </div>



                    <div className="row">

                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" " required
                                    name='companyShares'
                                    onChange={handleChange}
                                    value={company.companyShares}
                                />
                                <label for="floatingInput">Shares</label>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" " required
                                    name='companyValuepershare'
                                    onChange={handleChange}
                                    value={company.companyValuepershare}
                                />

                                <label for="floatingInput">Value Per Share</label>
                            </div>

                        </div>

                        {/* <div className="col-lg-12">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" " readOnly

                                    value={(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format((company.companyShares * company.companyValuepershare) / 10000000) + 'Cr')}

                                />
                                <label for="floatingInput">Valuation</label>
                            </div>
                        </div> */}

                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" " required
                                    name='companyMinimumSlotSize'
                                    onChange={handleChange}
                                    value={company.companyMinimumSlotSize}
                                />
                                <label for="floatingInput">Minimum Slot Size</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" " required
                                    name='companyMaximumSlotSize'
                                    onChange={handleChange}
                                    value={company.companyMaximumSlotSize}
                                />
                                <label for="floatingInput">Maximum Slot Size</label>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" "
                                    name='companyMinimumSlotSize'
                                    onChange={handleChange}

                                    value={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(company.companyMinimumSlotSize * company.companyValuepershare)}
                                />
                                <label for="floatingInput">Minimum Slot Size</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" " readOnly defaultValue='0'
                                    name='companyMaximumSlotSize'
                                    onChange={handleChange}
                                    value={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(company.companyMaximumSlotSize * company.companyValuepershare)}
                                />
                                <label for="floatingInput">Maximum Slot Size Value</label>
                            </div>

                        </div>

                        <div className="col-lg-12">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" " required
                                    name='companyMaximumSlotsAllowed'

                                    onChange={handleChange}

                                    value={company.companyMaximumSlotsAllowed}

                                />
                                <label for="floatingInput">Maximum Slot Amount Allowed Per User</label>
                            </div>
                        </div>


                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="floatingInput" placeholder=" " required
                                    name='companyStartdate'
                                    onChange={handleChange}
                                    value={company.companyStartdate}
                                />
                                <label for="floatingInput">Start Date</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="floatingInput" placeholder=" " required
                                    name='companyEnddate'
                                    onChange={handleChange}
                                    value={company.companyEnddate}
                                />
                                <label for="floatingInput">Deadline</label>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="floatingInput" placeholder=" " style={{ height: '200px' }} required
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