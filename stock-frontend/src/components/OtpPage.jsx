import React from 'react'

export const OtpPage = ({ setotppage }) => {
    const verifyotp = async() => {
        const otp=document.getElementById('otp').value
        const response =await fetch('http://localhost:4000/verifyotp', {
            method: 'post',
            body: JSON.stringify({
              otp:otp
            }),
            headers: {
              'Content-type': 'application/json'
            }
          })
        setotppage(false)
    }
    const handleClose = () => {
        setotppage(false)
    }

    return (
        <div className='popup-box'>
            <div className='popup-box-inner'>
                <form className="form-otp">
                    <p className="heading-otp">Verify</p>
                    <div><center>Check Your Email</center></div>
                    <div className="box-otp">
                        <input className="input-otp" id='otp' type='number' maxLength="6" />
                    </div>
                    <button className="btn1-otp" onClick={verifyotp}>Submit</button>
                    <button className="btn2-otp" onClick={handleClose}>Close</button>
                </form>
            </div>
        </div>

    )
}



