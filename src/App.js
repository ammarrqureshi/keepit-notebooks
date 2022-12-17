//NOTEBOOK PROJECT

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./css/App.css";
import NotebookContainer from "./components/NotebookContainer";
import Notebook from "./components/Notebook";
import NotebookEditor from "./components/NotebookEditor";
import "./css/Navbar.css";
import NotebookFilter from "./components/NotebookFilter";
import EmptyState from "./components/EmptyState";

const INITIAL_NOTEBOOK_DATA = [
  {
    id: Math.random(),
    title: "My Journal",
    text:
      "Hello this is a notebook of some of my thoughts I write to stress down",
    date: new Date(2022, 11, 12),
  },
  {
    id: Math.random(),
    title: "Set a Time table",
    text: "Time table text goes here I write to stress down",
    date: new Date(2019, 10, 24),
  },
  {
    id: Math.random(),
    title: "Book Summary : rich dad",
    text:
      "rich dad said, make money work for you and never ever work for money. Invest in assets not in liabilities",
    date: new Date(2021, 10, 24),
  },
];

// Omdb api key : c452a2b2
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=c452a2b2
// const API_URL= 'http://www.omdbapi.com/?i=tt3896198&apikey=c452a2b2';

const App = () => {
  const [notebooks, setNotebooks] = useState(INITIAL_NOTEBOOK_DATA);
  const [filter, setFilter] = useState("All");

  const onAddNotebookHandler = (notebook) => {
    setNotebooks((prevNotebook) => {
      return [...notebooks, notebook];
    });
  };
  const onNotebookFilterHandler = (year) => {
    setFilter(year);
  };

  const filteredNotebooks = notebooks.filter((notebook) => {
    return filter === "All"
      ? notebook
      : notebook.date.getFullYear().toString() === filter;
  });

  return (
    <div>
      <NavBar />
      <div className="main">
        <NotebookContainer>
          {/* <div className="notebook-filter"> */}
          <NotebookFilter onNotebookFilter={onNotebookFilterHandler} />

          {filteredNotebooks.length === 0 ? (
            <EmptyState />
          ) : (
            filteredNotebooks.map((notebook) => (
              <Notebook
                key={notebook.id}
                title={notebook.title}
                text={notebook.text}
                date={notebook.date}
              />
            ))
          )}{" "}
        </NotebookContainer>

        <NotebookEditor onAddNotebook={onAddNotebookHandler}></NotebookEditor>
      </div>
    </div>
  );
};

export default App;
