import {
    GET_USERS,
    GET_USERS_FAILURE,
    GET_USERS_SUCCESS,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    DELETE_USER,
} from "../actionTypes/user";

export default (prevState = {
    users: [],
    user: {},
    isLoading: false,
    isRefreshing: false,
    id: -1,
    itemName: ''
}, action) => {
    console.log(action.type);
    switch (action.type) {
        case GET_USERS:
            return {
                ...prevState,
                isLoading: prevState.users.length > 0 ? false : true,
                page: action.page
            }
        case GET_USERS_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                users: prevState.users.concat(action.users)
            }
        case GET_USER:
            return {
                ...prevState,
                isLoading: true
            }
        case GET_USER_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                user: action.user
            }
        case ADD_USER:
            return {
                ...prevState,
                isLoading: true,
                user: action.user
            }
        case ADD_USER_SUCCESS:
            console.log('add User - ', action.user);
            return {
                ...prevState,
                isLoading: false,
                user: action.user
            }
        case DELETE_USER:
            return {
                ...prevState,
                isLoading: false,
                users: prevState.users.filter(tmpUser => tmpUser.id !== action.id)
            }
        case GET_USERS_FAILURE:
        case GET_USER_FAILURE:
        case ADD_USER_FAILURE:
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            }
        default:
            return prevState;

    }
}