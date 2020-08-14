import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE } from "./actions";

//Creating my actions using action creator

export const getUsers = () => ({
    type: GET_USERS,
})

export const getUsersSuccess = (users) => ({
    type: GET_USERS_SUCCESS,
    payload: users,
})

export const getUsersFailure = () => ({
    type: GET_USERS_FAILURE,
})

//Combining all action in an asynchronous thunk

export function fetchUsers() {
    return async (dispatch) => {
        dispatch(getUsers())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data)
            dispatch(getUsersSuccess(data))
        } catch (error) {
            dispatch(getUsersFailure())
        }
    }
}