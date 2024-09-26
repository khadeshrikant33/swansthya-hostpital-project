import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getCashlessData } from "../Redux/action";

function Cashless(){

  const dispatch=useDispatch();

  const {cashless}=useSelector(store=>store.product)

  useEffect(()=>{
     dispatch(getCashlessData())
  },[])
  // console.log(cashless);
    return(
        <>
        <div className="container-fluid">
            <div className="row"> 
                <div className="col-12 p-0 doctor_page_banner" style={{height:'500px',width:'100%',backgroundImage:"url('images/doctors/img1.jpg')",backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>
                   <h1 className="ml-5 mt-5">Cashless Facility</h1>
                   <ul>
                    <li className="d-inline-block ml-3">Home</li>
                    <li className="d-inline-block ml-3"><i className="fa-solid fa-chevron-right"></i></li>
                    <li className="d-inline-block ml-3">Cashless Facility</li>
                   </ul>
                
                </div>
            </div>
        </div>
        <section className="bg-light">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-12">
                       <h2>Cashless Facility Available</h2>
                       <table className="table table-striped table-light mt-5">
                        {cashless.map((data)=>{
                          return(
                            <>
                              <tr>
                                <td>{data.srno}</td>
                                <td>{data.company}</td>
                              </tr>
                            </>
                          )
                        })}
                          
                          {/* <tr>
                            <td>2</td>
                            <td>Bajaj Allianz General Insurance</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>ICICI Lombard General Insurance</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Max Bupa General Insurance</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Apollo Munich Health Insurance</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Cholamandalam Ms General Insurance</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Universal Sompo General Insurance Co. Ltd.</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>Iffco Tokio General Insurance Co.</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>Aditya Birla Health Insurance Co.</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>Liberty General India Insurance</td>
                          </tr> */}
                       </table>
                    </div>
                    <div className="col-12 mt-3">
                       <h2>TPA Services</h2>
                       <table className="table table-striped table-light mt-5">
                          <tr>
                            <td>1</td>
                            <td>MD India Health Services(TPA) Pvt. Ltd.</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Paramount Health Services (TPA) Pvt. Ltd.</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Medicare TPA Service Pvt. Ltd.</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Medi Assist India TPA Pvt. Ltd.</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Vipul Medicorp TPA Service Pvt. Ltd.</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>United Healthcare Parekh TPA Service</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Vidai Health TPA Services (formerly Known as TTK)</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>Medsave Health Insurance TPA Ltd.</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>Raksha TPA Services Pvt. Ltd.</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>Health India TPA Services</td>
                          </tr>
                       </table>
                    </div>
                    <div className="col-12 mt-3">
                       <h2>Government Health Scheme Available</h2>
                       <table className="table table-striped table-light mt-5">
                          <tr>
                            <td>1</td>
                            <td>(MJPJAY) Mahatma Jyotiba Phule Jan Arogya Yojana</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>(PMJAY) Pradhan Mantri Jan Arogya Yojana</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>(MPKAY) Maharashtra Police Kutumb Arogya Yojana</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>(MKSSKAY) Maharashtra Karagruh Sudhar Sevabai Kutumb Arogya Yojana</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>(ECHS) Ex-service Men Contributory Health Scheme</td>
                          </tr>
                       </table>
                    </div>
                    <div className="col-12 mt-3">
                       <h2>Pre Policy Health Checkup</h2>
                       <table className="table table-striped table-light mt-5">
                          <tr>
                            <td>1</td>
                            <td>HDFC Life Insurance Co.</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>ICICI General Insurance Company</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Vipul Mecare Pvt. Ltd.</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Call Health</td>
                          </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Cashless;