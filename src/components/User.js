import React from "react";
import PropTypes from "prop-types";
import Bio from "./Bio";
import Profile from "./Profile";

function User(props) {
  return (
    <React.Fragment>
      {/* <img src="{props.imgURL}"></img>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.message}</p> */}
      <Profile imgURL={props.imgURL}
        name={props.name}></Profile>
      <Bio description={props.description}></Bio>
    </React.Fragment>
  );
}

User.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  message: PropTypes.string,
}

export default User;