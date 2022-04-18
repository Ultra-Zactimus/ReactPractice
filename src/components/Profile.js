import React from "react";
import imgURL from "./../img/beavis.jpg";

function Profile(props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <img src={imgURL} alt="beavis" width="300" />
    </React.Fragment>
  );
}

export default Profile;