import axios from "axios"

export const  types = {
    
    FETCHING_SMURFS_START: "FETCHING_SMURFS_START",
    FETCHING_SMURFS_SUCCESS: "FETCHING_SMURFS_SUCCESS",
    FETCHING_SMURFS_ERROR: "FETCHING_SMURFS_ERROR",
    ADD_SMURF: "ADD_SMURF",
    ADD_SMURF_SUCCESS: "ADD_SMURF_SUCCESS",
    ADD_SMURF_ERROR: "ADD_SMURF_FAILURE"
};






export const fetchAllSmurfs = () => dispatch => {
    dispatch({type: types.FETCHING_SMURFS_START });
    
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log("rh: SmurfsCard.js: FetchAllSmurfs: axios.then", res);
        dispatch({
            type: types.FETCHING_SMURFS_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        console.error("getting the smurf data failed:", err.message);
        dispatch({
            type: types.FETCHING_SMURFS_ERROR,
            payload: err.message
        });
    });
};

export const addNewSmurf = (data) => {
    axios
        .post("http://localhost:3333/smurfs", data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error("error", err.message);
        });
   

};