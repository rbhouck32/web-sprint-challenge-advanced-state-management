import React from "react"
import { connect } from "react-redux"
import { addNewSmurf } from "../actions/index"
import { useForm } from "react-hook-form"
import styled from 'styled-components'





export const AddSmurfForm = () => {
    const { register, handleSubmit, reset } = useForm();
   

 const onSubmit = (data,e) => {
     console.log(data);
     addNewSmurf(data);
     e.target.reset();
 }


    return (
        <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
            <LabelWrap>
            <label htmlFor="name">
                Name:
                <TextField type="text" name="name" ref={register}  />
            </label>
            </LabelWrap>
            <LabelWrap>
            
            <label htmlFor="age">
                Age:
                <TextField type="text" name="age" ref={register} />
            </label>
            </LabelWrap>
            <LabelWrap>
            <label htmlFor="height">
                Height:
                <TextField type="text" name="height" ref={register} />
            </label>
            </LabelWrap>
            <button>Add Smurf</button>
            
        </form>
        </Card>
        
    )



    
};
const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        smurfs: state.smurfs,
        error: state.error,
        data: state.data
    };
};



export default connect(
    mapStateToProps,
    {}
)(AddSmurfForm);

export const Card = styled.div`

margin: 10px `;

export const LabelWrap = styled.div`
margin: 10px 0 `


export const Label = styled.label`
padding: 0 5px;`

export const TextField = styled.input`
margin: 0 5px;
`

