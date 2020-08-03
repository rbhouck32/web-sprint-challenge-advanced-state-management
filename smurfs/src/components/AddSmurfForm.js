import React from "react"
import { connect } from "react-redux"
import { addNewSmurf } from "../actions/index"
import { useForm } from "react-hook-form"




export const AddSmurfForm = () => {
    const { register, handleSubmit } = useForm();
   

 const onSubmit = (data) => {
     console.log(data);
     addNewSmurf(data);
 }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
                Name:
                <input type="text" name="name" ref={register}  />
            </label>
            <label htmlFor="age">
                Age:
                <input type="text" name="age" ref={register} />
            </label>
            <label htmlFor="height">
                Height
                <input type="text" name="height" ref={register} />
            </label>
            <button>Add Smurf</button>
            
        </form>
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
