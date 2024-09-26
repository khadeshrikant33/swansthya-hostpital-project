import React from "react"; 



function Footer(){
    return(
        <>
        

        <div className="container-fluid bg-dark p-5 text-white">
            <div className="row">
                <div className="col-md-3">
                    <img src="https://www.swasthyahospital.com/img/footerlogo.png"></img>
                    <p className="mt-2 text-justify">Wide range of medical services like diagnostic, treatment, speciality clinics, ICU units, emergency rooms & surgery.</p>
                    <ul type="none" className="pl-0">
                        <li className="mt-4"><i className="fa-sharp fa-solid fa-location-dot"></i>Annabhau Sathe Chowk, Laltaki, Ahmednagar, Maharashtra 414001</li>
                        <li className="mt-4"><i className="fa-solid fa-envelope"></i>swasthyahospitalcashless@gmail.com</li>
                        <li className="mt-4"><i className="fa-solid fa-phone"></i>0241-2344301, 2341311, 2430530</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="mb-4">Departments</h3>
                    <h6 className="mt-2">Cardiology</h6>
                    <h6 className="mt-2">CObstetrics & Gynaecology</h6>
                </div>
                <div className="col-md-3">
                    <h3 className="mb-4">Quick Links</h3>
                    <h6 className="mt-2">Home</h6>
                    <h6 className="mt-2">Facilities</h6>
                    <h6 className="mt-2">Doctors</h6>
                    <h6 className="mt-2">Cashless</h6>
                    <h6 className="mt-2">Contact Us</h6>
                    <h6 className="mt-2">24/7 Support</h6>
                </div>
                <div className="col-md-3">
                    <h3 className="mb-4">Facilities</h3>
                    <h6 className="mt-2">Cashless Facilities</h6>
                    <h6 className="mt-2">Cath Lab</h6>
                    <h6 className="mt-2">Opreation Theater</h6>
                    <h6 className="mt-2">ICU</h6>
                    <h6 className="mt-2">Cauallty</h6>
                    <h6 className="mt-2">2D Echo</h6>
                    <h6 className="mt-2">Stress Test</h6>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;