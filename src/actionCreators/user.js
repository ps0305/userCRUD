import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_USER,
    GET_USER_FAILURE,
    GET_USER_SUCCESS,
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    DELETE_USER,
} from "../actionTypes/user";


export function getUsers(page, limit) {
    return {
        type: GET_USERS,
        page,
        limit
    }
}

export function getUsersSuccess(users) {
    return {
        type: GET_USERS_SUCCESS,
        users
    }
}

export function getUsersFailure(error) {
    return {
        type: GET_USERS_FAILURE,
        error
    }
}

export function getUser(id) {
    return {
        type: GET_USER,
        id
    }
}

export function getUserSuccess(user) {
    return {
        type: GET_USER_SUCCESS,
        user
    }
}

export function getUserFailure(error) {
    return {
        type: GET_USER_FAILURE,
        error
    }
}

export function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        id
    }
}

export function addUserSuccess(user) {
    return {
        type: ADD_USER_SUCCESS,
        user
    }
}

export function addUserFailure(error) {
    return {
        type: ADD_USER_FAILURE,
        error
    }
}