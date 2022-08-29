import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ModalContext } from "../context/modal/ModalContext";
import { TasksContext } from "../context/tasks/TasksContext";
import { ThemeContext } from "../context/theme/ThemeContext";
import useColor from "../hooks/useColor";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TasksContext);
  const { setCurrentTaskId, openAddModal, openDetailModal } =
    useContext(ModalContext);
  const { setDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  // - Edit handler
  const editHandler = (event) => {
    event.stopPropagation();
    openAddModal();
    setCurrentTaskId(task.id);
  };

  // - Delete handler
  const deleteHandler = (id) => {
    deleteTask(id);
  };

  const onOpenDetailModal = (event) => {
    event.stopPropagation();
    openDetailModal();
    setCurrentTaskId(task.id);
  };

  const [taskColor, setTaskColor] = useState("");

  useEffect(() => {
    setTaskColor(useColor(task.category));
  }, [task]);

  return (
    <div
      className={setDark("task-card")}
      style={{ borderLeft: `0.5rem solid ${taskColor}` }}
      onClick={() => {
        navigate(`/${task.id}`);
      }}
    >
      <h3>{task.title}</h3>
      <p className={setDark("task-card__description")}>{task.description}</p>
      <div className="task-card__footer">
        {/* Preview */}
        <div
          className="task-card__view"
          style={{ backgroundColor: `${taskColor}` }}
          onClick={onOpenDetailModal}
        >
          <img src="./img/icons/view.svg" alt="hola" />
        </div>

        {/* Date */}
        <div className={setDark("task-card__date")}>
          <img src="./img/icons/date.svg" alt="" />
          <span>{task.date}</span>
        </div>

        {/* Buttons */}
        <div className="task-card__buttons">
          {/* Edit button */}
          <button
            className={setDark("task-card__button")}
            onClick={editHandler}
          >
            <img src="./img/icons/edit.svg" alt="" />
          </button>

          {/* Delete button */}
          <button
            className={setDark("task-card__button")}
            onClick={(event) => {
              deleteHandler(task.id);
              event.stopPropagation();
            }}
          >
            <img src="./img/icons/delete.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
