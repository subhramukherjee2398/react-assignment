
const initialState = {
    loading : false,
    currentuser : null,
    error:null
}

const userReducer = (state=initialState,action)=>{
 switch(action.type){
    default:
        return state;
 }
}

export default userReducer;