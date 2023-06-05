import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OtpPage = ({ setotppage }) => {
    const navigate=useNavigate()
    const verifyotp = async(e) => {
        e.preventDefault()
        const otp=document.getElementById('otp').value
        const response =await fetch('/api/signup/verifyotp', {
            method: 'post',
            body: JSON.stringify({
              otp:otp
            }),
            headers: {
              'Content-type': 'application/json'
            }
          }).then(res => res.json())
          .then((data) => {
            if(data.success) {
              alert(data.message)
              setotppage(false)
              navigate('/getipo')


            } else {
              alert(data.message)
              navigate('/Userlogin')
            }
          })
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



