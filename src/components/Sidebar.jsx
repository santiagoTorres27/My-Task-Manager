import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../context/modal/ModalContext";
import { SidebarContext } from "../context/sidebar/SidebarContext";
import { TasksContext } from "../context/tasks/TasksContext";
import { ThemeContext } from "../context/theme/ThemeContext";

const Sidebar = () => {
  const [expandStyle, setExpandStyle] = useState("");
  const { expanded, setExpanded } = useContext(SidebarContext);
  const { filterList } = useContext(TasksContext);
  const { openAddModal } = useContext(ModalContext);
  const { changeTheme, setDark } = useContext(ThemeContext);

  useEffect(() => {
    if (expanded) {
      setExpandStyle("");
    } else {
      setExpandStyle("--small");
    }
  }, [expanded]);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={setDark(`sidebar${expandStyle}`)}>
      <div className={setDark("sidebar__header")}>
        {/* {expanded && <h2>My task manager</h2>} */}

        <div className={`sidebar__logo-icon${expandStyle}`}>
          <img src="img/logo.png" alt="My Task Manager Logo" />
        </div>

        <button
          className={setDark("sidebar__menu-btn")}
          onClick={toggleSidebar}
        >
          {expanded && <img src="img/icons/left-arrow.svg" alt="" />}
          {!expanded && <img src="img/icons/menu.svg" alt="" />}
        </button>
      </div>

      <button className="sidebar__add-button" onClick={openAddModal}>
        <img src="img/icons/add.svg"></img>
        {expanded && <span>Add new task</span>}
      </button>

      {/* // - LIST */}

      <ul>
        {/* All items */}
        <li>
          <button
            className={setDark(`sidebar__link${expandStyle}`)}
            onClick={() => {
              filterList("");
            }}
          >
            <img src="img/icons/list.svg" alt="" />
            {expanded && <span>All</span>}
          </button>
        </li>

        {/* School */}
        <li>
          <button
            className={setDark(`sidebar__link${expandStyle}`)}
            onClick={() => {
              filterList("School");
            }}
          >
            <img
              src="img/icons/education.svg"
              alt=""
              className="school-icon"
              style={{ filter: "var(--color-category-school-filter)" }}
            />
            {expanded && <span>School</span>}
          </button>
        </li>

        {/* Home */}
        <li>
          <button
            className={setDark(`sidebar__link${expandStyle}`)}
            onClick={() => {
              filterList("Home");
            }}
          >
            <img
              src="img/icons/home.svg"
              alt=""
              style={{ filter: "var(--color-category-home-filter)" }}
            />
            {expanded && <span>Home</span>}
          </button>
        </li>

        {/* Health */}
        <li>
          <button
            className={setDark(`sidebar__link${expandStyle}`)}
            onClick={() => {
              filterList("Health");
            }}
          >
            <img
              src="img/icons/health.svg"
              alt=""
              style={{ filter: "var(--color-category-health-filter)" }}
            />
            {expanded && <span>Health</span>}
          </button>
        </li>

        {/* Shopping */}
        <li>
          <button
            className={setDark(`sidebar__link${expandStyle}`)}
            onClick={() => {
              filterList("Shopping");
            }}
          >
            <img
              src="img/icons/shopping.svg"
              alt=""
              style={{ filter: "var(--color-category-shopping-filter)" }}
            />
            {expanded && <span>Shopping</span>}
          </button>
        </li>

        <div className="sidebar__divider"></div>

        {/* Completed */}
        <li>
          <button
            className={setDark(`sidebar__link${expandStyle}`)}
            onClick={() => {
              filterList("Completed");
            }}
          >
            <img src="img/icons/checked.svg" alt="" />
            {expanded && <span>Completed</span>}
          </button>
        </li>

        {/* Unfinished */}
        <li>
          <button
            className={setDark(`sidebar__link${expandStyle}`)}
            onClick={() => {
              filterList("Unfinished");
            }}
          >
            <img src="img/icons/unchecked.svg" alt="" />
            {expanded && <span>Unfinished</span>}
          </button>
        </li>

        {/* Color theme */}
        <div className="sidebar__divider"></div>

        <li>
          <button
            className={setDark(`sidebar__link${expandStyle}`)}
            onClick={changeTheme}
          >
            <img src="img/icons/color-theme.svg" alt="" />
            {expanded && <span>Change theme</span>}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
