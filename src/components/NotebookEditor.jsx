import React, { useState } from "react";
import NotebookForm from "./NotebookForm";
import Button from "./Button";

const NotebookEditor = (props) => {
  const onCancelHandler = () => {
    setIsEditing(false);
  };
  const [isEditing, setIsEditing] = useState(false);
  const displayFormHandler = () => {
    setIsEditing(true);
  };

  const onSaveNotebookDataHandler = (newNotebookData) => {
    const notebookData = {
      ...newNotebookData,
    };

    props.onAddNotebook(notebookData);
  };
  return (
    <div className="notebook-editor">
      {!isEditing ? (
        <Button primary onClick={displayFormHandler} className="fixed-bottom">
          + New Notebook
        </Button>
      ) : (
        <NotebookForm
          onSaveNotebookData={onSaveNotebookDataHandler}
          onCancel={onCancelHandler}
        ></NotebookForm>
      )}
    </div>
  );
};

export default NotebookEditor;
