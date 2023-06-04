import React, { useState } from 'react'
import '../App.css'
import NavBar from '../components/navbar'
import Footer from '../components/Footer'

export const Login = () => {
  const [data, setdata] = useState('')

  const login = () => {
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value

    const response = fetch('http://localhost:3000/login', {
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

  const signup = () => {

    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value

    const response = fetch('http://localhost:3000/signup', {
      method: 'post',
      body: JSON.stringify({
        email: email,
        password: pass
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => response.json()).then(data => setdata(data))
    alert("Sign Up Successfully, Please Confirm Your Mail")
  }
  return (
    <>
      <NavBar />

      <div className='body-login container-fluid'>
        <div className="main-login col-8">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup-login">

            <label className='label-login' htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" className='input-login' name="txt" placeholder="User name" required="" />
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
      <Footer />
    </>
  )
}
