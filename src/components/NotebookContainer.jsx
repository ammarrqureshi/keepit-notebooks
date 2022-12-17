import React from "react";

const NotebookContainer = (props) => {
  

  return (
    <div className="notebook-container">
      {props.children}
     
    </div>
  );
};

export default NotebookContainer;
