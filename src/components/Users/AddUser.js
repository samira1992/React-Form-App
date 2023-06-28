import React, {useState, userRef} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUsers = (props) =>{
    const nameInputRef=userRef();
    const ageInputRef=userRef();

    //const [enteredUsername, setEnteredUsername] =useState('');
    //const [enteredAge, setEnteredAge]= useState('');
    const [error, setError]=useState()

const addUserHandler = (event)=>{
    event.preventDefault();
    const enteredName= nameInputRef.current.value;
    const enteredUserAge=ageInputRef.current.value
    //adding validation for inout fields
    if(enteredName.trim().length ===0 || enteredUserAge.trim().length ===0){
        setError({
            title:'Invalid input',
            message:"Please enter a valid name and age (non-empty value)."
        })
       return;
    }

    if(+enteredUserAge < -1){
        setError({
            title:'Invalid age',
            message:"Please enter a valid age (>0)."
        })
        return;
    }

    props.onAddUser( enteredName, enteredUserAge);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    //to reset fields
    //setEnteredUsername('');
    //setEnteredAge('');
}

/*const ageChangeHandler = (event)=>{
    setEnteredAge(event.target.value)
}

const usernameChangeHandler= event =>{
   setEnteredUsername(event.target.value)
};*/

const errorHandler=()=>{
    setError(null);
}
    return(
        <Wrapper>
            
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label>Username</label>
            <input type="text" id="username"  ref={nameInputRef}/>
            <label>Age</label>
            <input type="number" id="age"  ref={ageInputRef} />
            <Button type="submit">Add users</Button>
        </form>
        </Card>
        </Wrapper>
    )
    
    

}

export default AddUsers;