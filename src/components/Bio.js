import React from "react";

function Bio(props) {
  return (
    <React.Fragment>
      <h3>{props.description}</h3>
    </React.Fragment>
  );
}

export default Bio;