import {combineReducers} from 'redux';
import  usersReducer  from './usersReducers';

const rootReducer = combineReducers({
    users: usersReducer,
})

export default rootReducer;