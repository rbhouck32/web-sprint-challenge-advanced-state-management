import { types } from "../actions/index"



const initialState = {
    smurfs: [],
    isFetching: false,
    error: "",
    data: 
    {
        name: "",
        age: "",
        height: ""
    },
    
}




export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCHING_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case types.FETCHING_SMURFS_SUCCESS:
            return {
                ...state, isFetching: false,
                smurfs: action.payload,
                error: ""
            };
        case types.FETCHING_SMURFS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
            default:
                return state;
    }
}



