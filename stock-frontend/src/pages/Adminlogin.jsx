import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Adminlogin = () => {
    const navigate=useNavigate();
    const [user, setuser] = useState({
        'email': '',
        'password': ''
      })
    
      const handlechange = (e) => {
        const { name, value } = e.target;
    
        setuser((prev) => {
          return { ...prev, [name]: value }
        })
      }
      const login=(e)=>{
        e.preventDefault()
        fetch('/api/login/adminlogin', {
            method: 'post',
            body: JSON.stringify({
              email: user.email,
              password: user.password
            }),
            headers: {
              'Content-type': 'application/json'
            }
          }).then(res => res.json())
            .then((data) => {
                console.log(data);
              if (data.success) {
                toast.success('Login Successfully')
                navigate('/register')
                
              } else {
                toast.error('Invalid Credentials')
              }
            })
      }

    return (
        <div>
            <div className="wrapper-admin">
                <div className="container-admin">
                    <div className="col-left-admin">
                        <h2>Admin Login</h2>
                    </div>
                    <div className="col-right-admin">
                        <div className="login-form-admin">
                           
                            <form onSubmit={login}>
                                <p>
                                    <label>Email address<span>*</span></label>
                                    <input type="text" placeholder="Email" name='email' onChange={handlechange} value={user.email} required />
                                </p>
                                <p>
                                    <label>Password<span>*</span></label>
                                    <input type="password" placeholder="Password" name='password' onChange={handlechange} value={user.password} required />
                                </p>
                                <p>
                                    <input type="submit" value="Sing In" />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
