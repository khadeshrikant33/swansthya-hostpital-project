import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliderData } from "../Redux/action";

function Index(){

  const dispatch=useDispatch();

  const {slider}=useSelector(store=>store.product)

  useEffect(()=>{
    dispatch(getSliderData())  
},[]);
console.log(slider);


    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                   <div className="carousel-inner">
                   <div className="carousel-item active">
                      <img src="images/slider/slider5.jpg" className="d-block w-100" alt="..."/>
                   </div>
                   <div className="carousel-item">
                     <img src="images/slider/slider2.jpg" className="d-block w-100" alt="..."/>
                   </div>
                   <div className="carousel-item">
                     <img src="images/slider/slider4.jpg" className="d-block w-100" alt="..."/>
                   </div>
                  </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
                   <span className="sr-only">Next</span>
                </button>
              </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Index;