import { useState } from "react";
import Button from "./Button";
import "../css/Notebook.css";

import "../css/Button.css";

const Notebook = (props) => {
  const [title, setTitle] = useState(props.title);

  const deleteNotebookHandler = (event) => {
    event.preventDefault();
    alert("Edit /Delete function not Added yet!");
  };

  const date = props.date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="notebook">
      <div className="text-wrapper">
        <h3>{title}</h3>
        <h5>{props.text}</h5>
        <p>{date}</p>
      </div>
      <div>
        <form className="notebook-action" action="">
          <Button onClick={deleteNotebookHandler}>Edit</Button>
          <Button primary onClick={deleteNotebookHandler}>
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Notebook;
