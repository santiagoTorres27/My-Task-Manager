import React, { useContext, useEffect, useState } from "react";
import EmptyListMsg from "../components/EmptyListMsg";
import FilterTab from "../components/FilterTab";
import TasksList from "../components/TasksList";
import { TasksContext } from "../context/tasks/TasksContext";
import { ThemeContext } from "../context/theme/ThemeContext";

const Home = () => {
  const { list } = useContext(TasksContext);
  const { setDark } = useContext(ThemeContext);

  return (
    <div className={`home ${setDark("home")}`}>
      <FilterTab />

      <div className="home__container">
        {/* Empty list image */}
        {list.length === 0 && <EmptyListMsg />}

        {/* List */}
        <TasksList list={list} />
      </div>
    </div>
  );
};

export default Home;
