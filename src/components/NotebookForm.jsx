import React, { useState } from "react";
import Button from "./Button";
const NotebookForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredNotes: "",
  });

  const [hasEntered, setHasEntered] = useState({ title: true, notes: true });

  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      hasEntered.title = true;
    }
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const notesChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      hasEntered.notes = true;
    }
    setUserInput((prevState) => {
      return { ...prevState, enteredNotes: event.target.value };
    });
  };

  const addNotebookHandler = (event) => {
    event.preventDefault();
    if (userInput.enteredTitle.trim().length == 0) {
      setHasEntered((prevState) => {
        return { ...prevState, title: false };
      });
      return;
    }
    if (userInput.enteredNotes.trim().length == 0) {
      setHasEntered((prevState) => {
        return { ...prevState, notes: false };
      });
      return;
    }

    const date = new Date();

    // This arrangement can be altered based on how we want the date's format to appear.
    // let dateCreated = `${day}-${month}-${year}`;

    const notebookData = {
      id: Math.random(),
      title: userInput.enteredTitle,
      text: userInput.enteredNotes,
      date: date,
    };

    props.onSaveNotebookData(notebookData);

    // console.log(notebookData);
    setUserInput({
      enteredNotes: "",
      enteredTitle: "",
    });

    //Exit notebook Form function on Addition
    props.onCancel();
  };

  return (
    <div>
      <form className="notebook-form" action="" onSubmit={addNotebookHandler}>
        <label htmlFor="title">Title</label>
        <input
          className={`form-control ${!hasEntered.title ? "invalid-input" : ""}`}
          type="text"
          placeholder={!hasEntered.title ? "Write Title!!!" : ""}

          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
        />
        <label htmlFor="">Notes</label>
        <input
          className={`form-control ${!hasEntered.notes ? "invalid-input" : ""}`}
          type="text"
          placeholder={!hasEntered.notes ? "Put some notes!!!" : ""}
          value={userInput.enteredNotes}
          onChange={notesChangeHandler}
        />

        <Button primary
          type="submit"
          className="margin-top"
        >Add Notebook</Button>
        <Button secondary
          onClick={props.onCancel}
          className="margin-top"
        >Cancel</Button>
      </form>
    </div>
  );
};

export default NotebookForm;
