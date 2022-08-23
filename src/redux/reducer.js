import * as types from './actionType';

 const initialState = {
    loading : false,
    currentuser : null,
    error:null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
            return {
                ...state,
                 loading: true,
                 currentUser: action.payload
            }
        /* case types.REGISTER_SUCCESSS :
            return {
                ...state,
                loading:false,
                currentUser: action.payload
            }  
        case types.REGISTER_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            } */
        default:
            return state;
    }
}

export default userReducer;