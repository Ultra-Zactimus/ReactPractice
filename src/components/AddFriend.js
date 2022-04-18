import React from "react";

function AddFriend(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.mainUserList.map((user) =>
          <div>
            <h3>{user.name}</h3>
            <button>Add Friend</button>
          </div> 
      )}
    </React.Fragment>
  );
}

export default AddFriend;