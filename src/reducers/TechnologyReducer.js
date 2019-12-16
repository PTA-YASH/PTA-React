import { GET_TECHNOLOGIES} from'./../actions/types';
const initialState={
     technologyList:[]
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_TECHNOLOGIES:
            return{
                ...state,
                technologyList:action.payload
                };
         
        default:
        return state;
    }

    }
