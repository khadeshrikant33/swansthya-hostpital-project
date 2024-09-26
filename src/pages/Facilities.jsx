import React, { useEffect, useState } from "react";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { getFacilitiesData } from "../Redux/action";
// import axios from "axios";

function Facilities(){
    const dispatch=useDispatch();

    const {facilities}=useSelector(store=>store.product)

    useEffect(()=>{
        dispatch(getFacilitiesData());
    },[])
    console.log(facilities);

    // var[data1,setData]=useState([]);

    // useEffect(()=>{
    //     loaddata();
    //     console.log("welcome");
    // },[])

    // const loaddata=async()=>{
    //     const result=await axios.get('http://localhost:3000/user')
    //     setData(result.data);
    // }
    // console.log(data1);
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0 doctor_page_banner" style={{height:'500px',width:'100%',backgroundImage:"url('images/doctors/img1.jpg')",backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>
                   <h1 className="ml-5 mt-5">Facilities</h1>
                   <ul>
                    <li className="d-inline-block ml-3">Home</li>
                    <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right"></i></li>
                    <li className="d-inline-block ml-3">Facilities</li>
                   </ul>
                
                </div>
            </div>
        </div>
        <section className="bg-light">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-4 mt-2 p-4">
                        <div className="card card-body p-0">
                            <img src="images/facilities/img1.jpg"/>
                        </div>
                        <div className="card-footer text-center"></div>
                    </div>
                    <div className="col-md-4 mt-2">
                        <div className="card card-body">
                            <img src="images/facilities/img2.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2">
                        <div className="card card-body">
                            <img src="images/facilities/img3.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-body">
                            <img src="images/facilities/img4.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-body">
                            <img src="images/facilities/img5.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-body">
                            <img src="images/facilities/img6.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-body">
                            <img src="images/facilities/img7.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-body">
                            <img src="images/facilities/img8.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-body">
                            <img src="images/facilities/img9.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Facilities;