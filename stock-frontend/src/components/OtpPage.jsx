import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const OtpPage = ({ setotppage }) => {
  const navigate = useNavigate()
  const verifyotp = async (e) => {
    e.preventDefault()
    const otp = document.getElementById('otp').value
    const response = await fetch('/api/signup/verifyotp', {
      method: 'post',
      body: JSON.stringify({
        otp: otp
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json())
      .then((data) => {
        if (data.success) {
          toast.success('Account Added')
          setotppage(false)
          navigate('/home')


        } else {
          toast.error('Error')
          navigate('/')
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
        <ToastContainer />
      </div>
    </div>

  )
}



