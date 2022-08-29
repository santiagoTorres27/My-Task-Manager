import React from "react";
import TaskCard from "./TaskCard";

const TasksList = ({ list }) => {
  return (
    <>
      {list.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
};

export default TasksList;
