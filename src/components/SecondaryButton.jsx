import React from "react";

const SecondaryButton = (props) => {
  return (
    <div>
      <div>
        <button className="secondary-button"> {props.text}</button>
      </div>
    </div>
  );
};

export default SecondaryButton;
