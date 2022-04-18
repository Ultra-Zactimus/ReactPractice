import React from "react";
import User from "./User";

function UserList(props){
  return (
    <React.Fragment>
    <hr/>
    {props.mainUserList.map((user, index) =>
        <User name={user.name}
          description={user.description}
          imgURL={user.imgURL}
          message={user.message} 
          key={index}/>
    )}
    </React.Fragment>
  );
}

export default UserList;