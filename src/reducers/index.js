import {combineReducers} from 'redux';
import errorReducer from  './errorReducer';
import UserReducer from './UserReducer';
import TechnologyReducer from './TechnologyReducer';



export default combineReducers({
    errors:errorReducer,
    user:UserReducer,
    technologyList:TechnologyReducer

});