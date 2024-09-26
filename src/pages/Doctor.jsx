import React, { useEffect} from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorsData } from "../Redux/action";

function Doctor(){
    const dispatch=useDispatch();

    const {doctor}=useSelector(store=>store.product)
    
    useEffect(()=>{
        dispatch(getDoctorsData())  
    },[]);
    console.log(doctor);
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0 doctor_page_banner" style={{height:'500px',width:'100%',backgroundImage:"url('images/doctors/img1.jpg')",backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>
                   <h1 className="ml-5 mt-5">All Doctors</h1>
                   <ul>
                    <li className="d-inline-block ml-3">Home</li>
                    <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right"></i></li>
                    <li className="d-inline-block ml-3">Doctors</li>
                   </ul>
                
                </div>
            </div>
        </div>
        <section className="bg-light">
            <div className="container pt-5 pb-5">
                <div className="row">
              
               
                            <>
                            <div className="col-md-6 mt-2">
                               <div className="card card-body">
                                  <div className="row">
                                     <div className="col-4">
                                    {/* <img src={`https://a2zithub.com/swasthyahospital/uploads/${data.dr_image}`} className="doctor_img rounded-circle mt-5"/> */}
                                     <img src="images/doctors/img3.jpg" className="doctor_img rounded-circle mt-5"/>
                                     </div>
                                     <div className="col-8">
                                        <h3>Department</h3>
                                        <p>Quick Links</p>
                                        <h6>Facilities</h6>
                                        <button className="btn btn-outline-primary mt-2">View Profile</button><br/><br/>
                                        <button className="btn btn-primary">Make An Appointment </button>
                                      </div>
                                    </div>
                                </div>
                             </div>
                            </>
                   
                    
                    
                </div>
            </div>
        </section>
        </>
    )
}
export default Doctor;