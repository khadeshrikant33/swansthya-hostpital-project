import React from "react";
import "./style.css";

function Contactus(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0 doctor_page_banner" style={{height:'500px',width:'100%',backgroundImage:"url('images/doctors/img1.jpg')",backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>
                   <h1 className="ml-5 mt-5">Contact Us</h1>
                   <ul>
                    <li className="d-inline-block ml-3">Home</li>
                    <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right"></i></li>
                    <li className="d-inline-block ml-3">Contact</li>
                   </ul>
                
                </div>
            </div>
        </div>
        <section className="bg-light">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.072197803729!2d74.73209710911847!3d19.10448838203129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb07d76ddc4a1%3A0x7e8a5d2a19c41a33!2sSwasthya%20Hospital%20And%20Medical%20Research%20Center!5e0!3m2!1sen!2sin!4v1721385822972!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> 
                </div>    
                <div className="row mt-4 mb-4">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-12">
                                <h2>Leave Us Message</h2>
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="text" placeholder="First Name*" className="form-control"></input>
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="text" placeholder="Last Name*" className="form-control"></input>
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="email" placeholder="E-mail*" className="form-control"></input>
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="text" placeholder="Phone*" className="form-control"></input>
                            </div>
                            <div className="col-md-6 mt-3">
                                <select>
                                    <option>Choose Dr.</option>
                                    <option>Dr.Abhijit Pathak</option>
                                    <option>Dr.Renuka Pathak</option>
                                </select>
                            </div>
                            <div className="col-12 mt-3">
                                <textarea className="form-control" placeholder="Message*" rows='6'></textarea>
                            </div>
                            <div className="col-12 mt-3">
                                <button className="btn btn-primary btn-lg">Submit Message</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                         <h2>Address</h2>
                        <ul type="none" className="pl-0">
                            <li className="mt-4 font-weight-bold"><i className="text-primary fa-sharp fa-solid fa-location-dot"></i>Annabhau Sathe Chowk, Laltaki, Ahmednagar, Maharashtra 414001</li>
                            <li className="mt-4 font-weight-bold"><i className="text-primary fa-solid fa-envelope"></i>swasthyahospitalcashless@gmail.com</li>
                             <li className="mt-4 font-weight-bold"><i className="text-primary fa-solid fa-phone"></i>0241-2344301, 2341311, 2430530</li>
                        </ul>
                    </div>
                </div>  
                
            </div>
        </section>
        </>
    )
}
export default Contactus;