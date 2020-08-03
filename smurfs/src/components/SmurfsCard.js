import React from "react";
import { connect } from "react-redux";
import styled from "styled-components"

import { fetchAllSmurfs } from "../actions/index"



const SmurfsCard = ({ fetchAllSmurfs, error, smurfs, isFetching }) => {
    if(isFetching) {
        return <div>** FETCHING SOME SMURFS FOR YOU **</div>;
    }

    return (
        <Card>
        <button onClick={() => fetchAllSmurfs()}>GET SMURFED</button>
        <div style={{color: "red"}}>{error}</div>
       
        {smurfs.map(smurf => {
            return (
            <div key={smurf.id}>
                <h2>Name: {smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
                </div>
            )
        })}
    </Card>
        
    )
    


};


const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        smurfs: state.smurfs,
        error: state.error
    };
};



export default connect(
    mapStateToProps,
    { fetchAllSmurfs}
)(SmurfsCard);




export const Card = styled.div`
margin: 50px 0 `;