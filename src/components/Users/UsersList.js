import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css'

const UsersList = (props) => {

  const { users } = props;

  
  if (users.length === 0) {
    return (
      <Card className={classes.users}>
        <div className={classes.emptyListContainer}>
          <p className={classes.emptyListText}>List is empty</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className={classes.users}>
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
    </Card>
  );
  
};
export default UsersList;
