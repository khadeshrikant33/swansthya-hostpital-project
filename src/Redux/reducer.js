import { GET_ABOUT_DATA, GET_CASHLESS_DATA, GET_DOCTORS_DATA, GET_FACILITIES_DATA, GET_SLIDER_DATA} from "./actiontType"

const initialstate={
    loading:false,
    error:false,
    doctor:[],
    slider:[],
    about:[],
    dep:[],
    facilities:[],
    cashless:[]
}
export const reducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case GET_DOCTORS_DATA:
            return{
                ...state,loading:false,doctor:payload
            }
        case GET_ABOUT_DATA:
            return{
                ...state,loading:false,about:payload
            }
        case GET_FACILITIES_DATA:
            return{
                ...state,loading:false,facilities:payload
            } 
        case GET_SLIDER_DATA:
            return{
                ...state,loading:false,slider:payload
            } 
        case GET_CASHLESS_DATA:
            return{
                ...state,loading:false,cashless:payload
            }            
        default:
            return{
                ...state
            }    
    }
}