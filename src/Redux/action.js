import axios from "axios";
import { GET_CASHLESS_DATA, GET_DOCTORS_DATA, GET_FACILITIES_DATA, GET_SLIDER_DATA, SET_ERROR, SET_LOADING } from "./actiontType";

export const getDoctorsData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response= await axios.get('http://localhost:3000/swhospitaldoctors')
        dispatch({type:GET_DOCTORS_DATA,payload:response.data}) 
        // console.log(response);    
    }
    catch(error){
       dispatch({type:SET_ERROR})
    }
}

export const getFacilitiesData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response= await axios.get('http://localhost:3000/user')
        dispatch({type:GET_FACILITIES_DATA,payload:response.data}) 
        // console.log(response);    
        
           
    }
    catch(error){
       dispatch({type:SET_ERROR})
    }
}

export const getSliderData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response= await axios.get('https://a2zithub.com/swasthyahospital/hospital/slider')
        dispatch({type:GET_SLIDER_DATA , payload:response.data}) 
        // console.log(response);   
        
           
    }
    catch(error){
       dispatch({type:SET_ERROR})
    }
}

export const getCashlessData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response= await axios.get('http://localhost:3000/swhospitalcashless')
        dispatch({type:GET_CASHLESS_DATA , payload:response.data}) 
        // console.log(response);   
        
           
    }
    catch(error){
       dispatch({type:SET_ERROR})
    }
}