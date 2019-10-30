import {
    put,
    takeLatest
} from "redux-saga/effects";
import * as actionCreators from "../actionCreators/user"
import {
    GET_USERS, ADD_USER, GET_USER
} from "../actionTypes/user";

let URI = "https://jsonplaceholder.typicode.com";

function* getUsers() {
    try {
        let users = yield fetch(`${URI}/users`).then(r => r.json());
        yield put(actionCreators.getUsersSuccess(users))
    } catch (error) {
        yield put(actionCreators.getUsersFailure(error))
    }
}

function* getUser(action) {
    try {
        let user = yield fetch(`${URI}/users/${action.id}`).then(r => r.json());

        yield put(actionCreators.getUserSuccess(user))
    } catch (error) {
        console.log(error)
        yield put(actionCreators.getUserFailure(error))
    }
}

function* addUser(action) {
    try {

        let user = yield fetch(`${URI}/users`, {
            body: JSON.stringify(action.user),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        }).then(r => r.json());
        yield put(actionCreators.addUserSuccess(user))
    } catch (error) {
        yield put(actionCreators.addUserFailure(error))
    }
}

export function* userWatchers() {
    yield takeLatest(GET_USERS, getUsers)
    yield takeLatest(GET_USER, getUser)
    yield takeLatest(ADD_USER, addUser)

}