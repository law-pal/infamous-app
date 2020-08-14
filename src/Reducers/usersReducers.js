import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE } from "../Actions/actions";



export const initialState = {
    users: [],
    loading: false,
    hasErrors: false
}


export default function usersReducer(state = initialState, action){
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                loading: true
            }
            case GET_USERS_SUCCESS:
                console.log(action.payload)
                return{
                    users: action.payload,
                    loading: false,
                    hasErrors: false
                }

            case GET_USERS_FAILURE:
                return{...state, loading: false, hasErrors: true}
        default:
            return state
    }


}

