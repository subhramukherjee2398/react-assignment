import * as types from './actionType';

const initialState = {
    loading: false,
    currentuser: null,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
            return {
                ...state,
                loading: true,
            }
        case types.REGISTER_SUCCESSS:
        case types.LOGIN_SUCCESSS:
            return {
                ...state,
                loading: false,
                currentuser: action.payload
            }
        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;