import React, { useState } from 'react'
import '../App.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client'
import { OtpPage } from '../components/OtpPage';

export const Login = () => {
  const socket = io("ws://localhost:4000");
  const [data, setdata] = useState('')
  const [otppage,setotppage]=useState(false)
  const login = () => {
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value

    const response = fetch('http://localhost:4000/login', {
      method: 'post',
      body: JSON.stringify({
        email: email,
        password: pass
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => response.json()).then(data => setdata(data))
    alert("Login Successfully")
  }

  const signup = async () => {
    const userName=document.getElementById('userName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('pass').value

    const response =await fetch('http://localhost:4000/signup', {
      method: 'post',
      body: JSON.stringify({
        userName:userName,
        email: email,
        password: password
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(setotppage(true))
    setotppage(true)
    
  }

  socket.on('success',()=>{
    console.log('Success');
  })

  socket.on('email-error',()=>{
		toast.error('Email Taken')
	})

  socket.on('email-success',()=>{
		toast.error('Please Check Email For Otp')
	})

  return (
    <>

      <div className='body-login container-fluid'>
        <div className="main-login col-8">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup-login">

            <label className='label-login' htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" className='input-login' id='userName' name="txt" placeholder="User name" required="" />
            <input type="email" className='input-login' name="email" id="email" placeholder="Email" required="" />
            <input type="password" className='input-login' name="pswd" id="pass" placeholder="Password" required="" />
            <button className='button-login' onClick={signup}>Sign up</button>

          </div>

          <div className="login">

            <label className='label-login' htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" className='input-login' name="email" id="email" placeholder="Email" required="" />
            <input type="password" className='input-login' name="pass" id="pass" placeholder="Password" required="" />
            <button className='button-login' onClick={login}>Login</button>

          </div>
        </div>
        
      </div>
            {
              otppage && <OtpPage setotppage={setotppage}/>
            }
     
    </>
  )
}
