
import { auth } from '../firebase';
import * as types from './actionType';

const registerStart = () => (
    {
        type: types.REGISTER_START,
    }
)

const registerSucess = (user) => (
    {
        type: types.REGISTER_SUCCESSS,
        payload: user,
    }
)

const registerFail = (error) => (
    {
        type: types.REGISTER_FAIL,
        payload: error,
    }
)

const LoginStart = () => (
    {
        type: types.LOGIN_START,
    }
)

const LoginSucess = (user) => (
    {
        type: types.LOGIN_SUCCESSS,
        payload: user,
    }
)

const LoginFail = (error) => (
    {
        type: types.LOGIN_FAIL,
        payload: error,
    }
)

export const registerInitiate = (userData) => {
    return function (dispatch) {
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(userData.email, userData.password).then((user) => {
            /*user.updateProfile({ displayName: userData.username })*/
            // displayname is the inbuilt firebase function
            dispatch(registerSucess(user))
        }).catch((error) => {
            dispatch(registerFail(error.message))
            console.warn(error)
        })
    }
}


export const LoginInitiate = (userData) => {
    return function (dispatch) {
        dispatch(LoginStart());
        auth.signInWithEmailAndPassword(userData.email, userData.password).then((user) => {
            dispatch(LoginSucess(user))
            console.log(user)
        }).catch((error) => {
            dispatch(LoginFail(error.message))
            console.warn(error)
        })
    }
}