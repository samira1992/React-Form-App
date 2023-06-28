import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUsers = (props) =>{
    const [enteredUsername, setEnteredUsername] =useState('');
    const [enteredAge, setEnteredAge]= useState('');
    const [error, setError]=useState()

const addUserHandler = (event)=>{
    event.preventDefault();

    //adding validation for inout fields
    if(enteredUsername.trim().length ===0 || enteredAge.trim().length ===0){
        setError({
            title:'Invalid input',
            message:"Please enter a valid name and age (non-empty value)."
        })
       return;
    }

    if(+enteredAge < -1){
        setError({
            title:'Invalid age',
            message:"Please enter a valid age (>0)."
        })
        return;
    }

    props.onAddUser( enteredUsername, enteredAge);
    //to reset fields
    setEnteredUsername('');
    setEnteredAge('');
}

const ageChangeHandler = (event)=>{
    setEnteredAge(event.target.value)
}

const usernameChangeHandler= event =>{
   setEnteredUsername(event.target.value)
};

const errorHandler=()=>{
    setError(null);
}
    return(
        <Wrapper>
            
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label>Username</label>
            <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername}/>
            <label>Age</label>
            <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge} />
            <Button type="submit">Add users</Button>
        </form>
        </Card>
        </Wrapper>
    )
    
    

}

export default AddUsers;