import React from "react";

const NotebookFilter = (props) => {
  const filterChangeHandler = (event) => {
    const data = event.target.value;
    // console.log(data);

    props.onNotebookFilter(data);
  };
  return (
    <div className="notebook-filter">
      <select
        onChange={filterChangeHandler}
        name="notebook-filter"
        id="notebook-filter"
      >
                <option value="All">All</option>

        <option value="2019">2019</option>
        <option value="2020">2020</option>

        <option value="2021">2021</option>

        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default NotebookFilter;
