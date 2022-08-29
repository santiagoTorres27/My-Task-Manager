import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../context/modal/ModalContext";
import { TasksContext } from "../context/tasks/TasksContext";
import { ThemeContext } from "../context/theme/ThemeContext";
import useColor from "../hooks/useColor";
import useColorGradient from "../hooks/useColorGradient";
import Modal from "../layout/Modal";

const TaskDetailModal = () => {
  const { currentTaskID, closeModal, setCurrentTaskId, openAddModal } =
    useContext(ModalContext);
  const { getTaskById, updateTask, deleteTask } = useContext(TasksContext);
  const { setDark } = useContext(ThemeContext);
  const [currentTask, setCurrentTask] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  // - Set color
  const [taskColor, setTaskColor] = useState("");
  const [colorGradient, setColorGradient] = useState("");
  const [chbxStyle, setChbxStyle] = useState("");

  // - use effect
  useEffect(() => {
    if (currentTaskID) {
      const data = getTaskById(currentTaskID);
      setCurrentTask({ ...data });
      setTaskColor(useColor(data.category));
      setColorGradient(useColorGradient(data.category));
      setChbxStyle(data.category.toLowerCase());
      setIsCompleted(data.completed);
    }
  }, [currentTaskID]);

  // - Complete handler
  const handleCompleted = () => {
    setIsCompleted(!isCompleted);
    const data = {
      ...currentTask,
      completed: isCompleted ? false : true,
    };
    updateTask(data);
  };

  // - Edit handler
  const editHandler = () => {
    closeModal();
    openAddModal();
    setCurrentTaskId(currentTask.id);
  };

  // - Delete handler
  const deleteHandler = () => {
    deleteTask(currentTask.id);
    closeModal();
  };

  return (
    <Modal>
      <div className="task-detail">
        {/* Close modal */}
        <button
          className={setDark("task-detail__close-btn")}
          onClick={closeModal}
        >
          <img src="img/icons/close.svg" alt="" />
        </button>

        {/* Title */}
        <h2 className={setDark("task-detail__title")}>{currentTask.title}</h2>

        {/* Chips */}
        <div className="task-detail__items">
          <div
            className="task-detail__item"
            style={{ backgroundColor: taskColor }}
          >
            <span>{currentTask.category}</span>
          </div>

          <div
            className="task-detail__item"
            style={{
              backgroundColor: colorGradient,
              border: `1px solid ${taskColor}`,
            }}
          >
            <span style={{ color: taskColor }}>Created on:</span>
            <span className="task-detail__date" style={{ color: taskColor }}>
              {currentTask.creationDate}
            </span>
          </div>

          <div
            className="task-detail__item"
            style={{
              backgroundColor: colorGradient,
              border: `1px solid ${taskColor}`,
            }}
          >
            <span style={{ color: taskColor }}>Task date is:</span>
            <span className="task-detail__date" style={{ color: taskColor }}>
              {currentTask.date}
            </span>
          </div>
        </div>

        <p className={setDark("task-detail__description")}>
          {currentTask.description}
        </p>

        <div className={setDark("task-detail__divider")}></div>

        <div className="task-detail__footer">
          {/* Checked */}
          <div className={setDark("task-detail__checked")}>
            <span>Status: {isCompleted ? "Completed" : "Unfinished"}</span>

            <label className="switch" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                className={`input input--${chbxStyle}`}
                onChange={handleCompleted}
                checked={!!isCompleted}
              />
              <div className="slider round"></div>
            </label>
          </div>

          <div className="task-detail__buttons">
            <button
              className={`btn-secondary ${setDark("btn-secondary--edit")}`}
              onClick={editHandler}
            >
              <img src="./img/icons/edit.svg" alt="" />
              Edit
            </button>

            <button
              className="btn-secondary btn-secondary--delete"
              onClick={deleteHandler}
            >
              <img src="./img/icons/delete.svg" alt="" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TaskDetailModal;
