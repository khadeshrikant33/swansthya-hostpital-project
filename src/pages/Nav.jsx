import React from "react";
import './style.css'
import { NavLink } from "react-router-dom";

function Nav(){
    return(
        <>
        <div className="container-fluid color-format-back d-none d-md-block">
            <div className="row">
                <div className="col-md-8">
                    <ul>
                        <li className="d-inline-block ml-2 mt-2 text-white"><i className="fa-solid fa-envelope mr-1"></i>swasthyahospitalcashless@gmail.com</li>
                        <li className="d-inline-block ml-2 mt-2 text-white"><i className="fa-solid fa-phone mr-1"></i>Call:0241 243 0530</li>
                        <li className="d-inline-block ml-2 mt-2 text-white"><i className="fa-solid fa-clock mr-1"></i>Emergency 24*7</li>
                    </ul>
                </div>
                <div className="col-md-4">
                <ul>
                        <li className="d-inline-block ml-4 mt-2 text-white">Marathi | English</li>
                        <li className="d-inline-block ml-4 mt-2 text-white"><i className="fa fa-facebook mr-1"></i></li>
                        <li className="d-inline-block ml-4 mt-2 text-white"><i className="fa fa-twitter mr-1"></i></li>
                        <li className="d-inline-block ml-4 mt-2 text-white"><i className="fa fa-youtube mr-1"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container mb-2">
            <div className="row">
                <div className="col-5 col-md-3">
                    <img src="https://www.swasthyahospital.com/img/logo.png" className="mt-2 w-100"/>
                </div>
                <div className="col-7 col-md-7">
                <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-end">

                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>

                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                     <li className="nav-item active">
                        <NavLink className="nav-link" to="./">Home</NavLink>
                     </li>
                     
                     <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" to="./">Department</NavLink>
                     <div className="dropdown-menu">
                     <a className="dropdown-item" href="#">Cardiology</a>
                     <a className="dropdown-item" href="#">Obstetrics & Gynaecolgy</a>
                     <a className="dropdown-item" href="#">Medicine</a>
                    </div>
                    </li>
                    <li className="nav-item">
                       <NavLink className="nav-link" to="./facilities">Facilities</NavLink>
                    </li>
                     <li className="nav-item">
                       <NavLink className="nav-link" to="./doctors">Doctors</NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink className="nav-link" to="./cashless">Cashless</NavLink>
                    </li>
                    <li className="nav-item">
                       <NavLink className="nav-link" to="./contactus">Contact Us</NavLink>
                    </li>
                    </ul>

                    </div>
                </nav>
                </div>
                <div className="col-md-2 d-none d-md-block">
                    <button className="btn btn-lg color-format-back mt-3 text-white">Appointment</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Nav;