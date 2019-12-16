import axios from 'axios';
import {GET_ERRORS,GET_USER} from './types';



export const getUser = (loginUser,history)=> async dispatch=>{
let res;
try{
const res=await axios.post("http://localhost:8080/api/pta/loginUser",
loginUser);
console.log("res1" , res);
console.log("status" , res.status);

dispatch({   
type:GET_USER,
payload:res.data,
status:res.status,
restype:res.type
})

}catch(error){
    console.log( error);
             dispatch({
        type:GET_ERRORS,
        payload:error.response.data
        });
}
};






