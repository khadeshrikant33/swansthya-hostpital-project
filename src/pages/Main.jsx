import React from "react";
import Index from "./Index";
import Cashless from './Cashless';
import Contactus from './Contactus';
import Doctor from './Doctor';
import Facilities from "./Facilities";
import Nav from "./Nav";
import Footer from "./Footer";
import {  BrowserRouter as Router, Routes ,Route } from "react-router-dom";

function Main(){
    return(
        <>
        <Router>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Index></Index>}></Route>
                <Route path="/cashless" element={<Cashless></Cashless>}></Route>
                <Route path="/contactus" element={<Contactus></Contactus>}></Route>
                <Route path="/doctors" element={<Doctor></Doctor>}></Route>
                <Route path="/facilities" element={<Facilities></Facilities>}></Route>
            </Routes>
            <Footer></Footer>

        </Router>
        </>
    )
}
export default Main;