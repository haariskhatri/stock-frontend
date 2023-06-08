import React, { useState } from 'react'

export const Adminlogin = () => {
    const [user,setuser]=useState();
    const [pass,setpass]=useState();

    return (
        <div>
            <div className="wrapper-admin">
                <div className="container-admin">
                    <div className="col-left-admin">
                        <h2>Admin Login</h2>
                    </div>
                    <div className="col-right-admin">
                        <div className="login-form-admin">
                           
                            <form onSubmit={()=>{setuser()}}>
                                <p>
                                    <label>Email address<span>*</span></label>
                                    <input type="text" placeholder="Email" required />
                                </p>
                                <p>
                                    <label>Password<span>*</span></label>
                                    <input type="password" placeholder="Password" required />
                                </p>
                                <p>
                                    <input type="submit" value="Sing In" />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
