import React from "react";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
    return (
        <>
            <div className="side-menu">


                <ul className="list-unstyled">
                    <li><NavLink to='/buy' > <i className="fa-solid fa-house"></i> Home</NavLink></li>
                    <li><NavLink to='/register' ><i className="fa-solid fa-square-plus"></i>Add IPO</NavLink></li>
                    <li><NavLink to='/admindetail' ><i className="fa-solid fa-circle-info"></i>Details</NavLink></li>
                    {/* <li><NavLink to='/dsa' >Item</NavLink></li> */}
                    <li><NavLink to='/dss' ><i className="fa-solid fa-right-from-bracket"></i>Log Out</NavLink></li>
                </ul>


            </div >
        </>
    )
}

export default SideMenu;