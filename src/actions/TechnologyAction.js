
import axios from 'axios';
import {GET_TECHNOLOGIES, GET_ERRORS} from './types';



export const getTechList = ()=> async dispatch=>{
let res;
try{
const res=await axios.get('http://localhost:8080/api/pta/techlist');
console.log("res1" , res);
console.log("status" , res.status);

dispatch({
    type:GET_TECHNOLOGIES,
    payload:res.data
    });

}catch(error){
    console.log( error);
    console.log("backend_err: " , error.response.data.message);
    
    

    dispatch({
        type:GET_ERRORS,
        payload:error.response.data
        });
}
};






