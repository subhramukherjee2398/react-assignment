
import { auth } from '../firebase';
import * as types from './actionType';

const registerStart = () =>(
    {
        type : types.REGISTER_START
    }
)

const registerSucess = () =>(
    {
        type : types.REGISTER_SUCCESSS,
        payload: "",
    }
)

const registerFail = () =>(
    {
        type : types.REGISTER_FAIL,
        payload : "",
    }
)

export const registerInitiate = (email,password,displayName) =>{
    return function(dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email,password).then((user)=>{
            user.updateProfile({
                displayName
            })
            dispatch(registerSucess(user))
            .catch((error)=> dispatch(registerFail(error.message)))
        })
    }
}