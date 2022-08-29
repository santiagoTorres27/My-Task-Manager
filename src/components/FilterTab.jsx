import React, { useContext, useState } from "react";
import { ModalContext } from "../context/modal/ModalContext";
import { TasksContext } from "../context/tasks/TasksContext";
import { ThemeContext } from "../context/theme/ThemeContext";

const FilterTab = () => {
  const {
    sortByNewest,
    sortByOldest,
    sortAlphabeticallyAsc,
    sortAlphabeticallyDesc,
  } = useContext(TasksContext);

  const { openAddModal } = useContext(ModalContext);
  const { changeTheme, setDark } = useContext(ThemeContext);

  // - Sort handler
  const onChangeInput = (event) => {
    sortTasksHandler(event.target.value);
  };

  const sortTasksHandler = (sortMode) => {
    switch (sortMode) {
      case "date-newest":
        sortByNewest();
        break;

      case "date-oldest":
        sortByOldest();
        break;

      case "alphabetically-asc":
        sortAlphabeticallyAsc();
        break;

      case "alphabetically-desc":
        sortAlphabeticallyDesc();
        break;

      default:
        break;
    }
  };

  // - Category handler

  const { filterList } = useContext(TasksContext);

  const onChangeCategory = (event) => {
    if (event.target.value === "All") {
      filterList("");
    }

    filterList(event.target.value);
  };

  const [isNavOptionsVisible, setIsNavOptionsVisible] = useState(true);
  const [navVisibility, setNavVisibility] = useState("");

  const toggleOptions = () => {
    setIsNavOptionsVisible(!isNavOptionsVisible);
    setNavVisibility(isNavOptionsVisible ? "visible" : "");
  };

  return (
    <div className={setDark("filter-tab")}>
      {/* Heading */}
      <div className={setDark("filter-tab__heading")}>
        <div>
          {/* Toggle menu */}
          <img
            src="img/icons/menu.svg"
            alt=""
            className={"hidden " + setDark("filter-tab__menu")}
            onClick={toggleOptions}
          />

          {/* Logo */}
          <h2 className={setDark("filter-tab__title")}>
            <img src="img/logo.png" alt="My Task Manager logo" />
            <span className="resp-hidden">My Task Manager</span>
          </h2>
        </div>

        {/* Add task (Responsive) */}
        <button className="btn-primary hidden" onClick={openAddModal}>
          <span>Add Task</span>
        </button>
      </div>

      {/* Sort */}
      <div className={`filter-tab__nav ${navVisibility}`}>
        <div className={setDark("filter-tab__input")}>
          <label htmlFor="sort" className="filter-tab__icon">
            <img src="./img/icons/sort.svg" alt="" />
          </label>
          <select
            id="sort"
            defaultValue={"DEFAULT"}
            name="sort"
            onChange={onChangeInput}
          >
            <option value="DEFAULT" disabled>
              Sort your tasks
            </option>
            <option value="date-newest">Date (Newest first)</option>
            <option value="date-oldest">Date (Oldest first)</option>
            <option value="alphabetically-asc">
              Alphabetically (Ascending)
            </option>
            <option value="alphabetically-desc">
              Alphabetically (Descending)
            </option>
          </select>
        </div>

        {/* Category */}
        <div className={setDark("filter-tab__input") + " hidden"}>
          <label htmlFor="sort" className="filter-tab__icon">
            <img src="./img/icons/category.svg" alt="" />
          </label>
          <select
            id="sort"
            defaultValue={"DEFAULT"}
            name="sort"
            onChange={onChangeCategory}
          >
            <option value="DEFAULT" disabled>
              Select the category
            </option>

            <optgroup label="Category">
              <option value="All">All</option>
              <option value="School">School</option>
              <option value="Home">Home</option>
              <option value="Health">Health</option>
              <option value="Shopping">Shopping</option>
            </optgroup>

            <optgroup label="Status">
              <option value="Completed">Completed</option>
              <option value="Unfinished">Unfinished</option>
            </optgroup>
          </select>
        </div>

        <button
          className="hidden btn-primary btn-primary--dark-text"
          onClick={() => {
            changeTheme();
            toggleOptions();
          }}
        >
          <img src="img/icons/color-theme.svg" alt="" />
          <span>Change theme</span>
        </button>
      </div>
    </div>
  );
};

export default FilterTab;
