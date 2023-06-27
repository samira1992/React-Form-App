
import UsersList from "./components/Users/UsersList";
import React, {useState} from "react";
import AddUsers from './components/Users/AddUser'

function App() {
const [usersList, setUsersList]=useState([])

//adding new user js object and adding new users list array

const addUserHandler=(uName, uAge)=>{
  setUsersList((prevUsersList)=>{
    return [...prevUsersList, {name:uName, age:uAge, id:Math.random().toString()}]
  })
  
}

  return (
    <div>
     <AddUsers onAddUser={addUserHandler}/>
     <UsersList users={usersList}/>
    </div>
  );
}

export default App;
