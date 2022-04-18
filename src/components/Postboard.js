import React from "react";


function Postboard(props) {
  return (
    <React.Fragment>
      <hr/>
      <ul>
      {props.mainUserList.map((user) =>
        <li>{user.name} : {user.message}</li>
        // <li>Coolstuff</li>
    )}
    </ul>
    </React.Fragment>
  );
}

export default Postboard;