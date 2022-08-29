import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useNavigate, useParams } from "react-router-dom";
import { ModalContext } from "../context/modal/ModalContext";
import { TasksContext } from "../context/tasks/TasksContext";
import { ThemeContext } from "../context/theme/ThemeContext";
import useColor from "../hooks/useColor";
import useIcon from "../hooks/useIcon";
import useColorFilter from "../hooks/useColorFilter";
import useColorGradient from "../hooks/useColorGradient";
import CommentSection from "./CommentSection";

import AOS from "aos";
import "aos/dist/aos.css";

const TaskDetail = () => {
  const { taskId } = useParams();
  const { getTaskById, updateTask, deleteTask } = useContext(TasksContext);
  const { setCurrentTaskId, openAddModal } = useContext(ModalContext);
  const [currentTask, setCurrentTask] = useState({});
  const navigate = useNavigate();
  const [color, setColor] = useState();
  const [colorGradient, setColorGradient] = useState();
  const [colorFilter, setColorFilter] = useState();
  const [isCompleted, setIsCompleted] = useState(false);
  const [cbStyle, setCbStyle] = useState("");
  const { setDark } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({});
  }, []);

  useEffect(() => {
    const task = getTaskById(taskId);
    setCurrentTask(task);
    setColor(useColor(task.category));
    setColorGradient(useColorGradient(task.category));
    setColorFilter(useColorFilter(task.category));
    setIsCompleted(task.completed);
    setCbStyle(task.category.toLowerCase());
  }, [taskId, updateTask]);

  // - Edit handler
  const editHandler = () => {
    openAddModal();
    setCurrentTaskId(taskId);
  };

  // - Delete handler
  const deleteHandler = () => {
    deleteTask(taskId);
    navigate("/");
  };

  // - Complete handler
  const handleCompleted = () => {
    setIsCompleted(!isCompleted);
    const data = {
      ...currentTask,
      completed: isCompleted ? false : true,
    };
    updateTask(data);
  };

  // - Submit form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newComment = {
      id: new Date().getTime().toString(),
      ...data,
      date: new Date().toISOString().split("T")[0],
    };
    const prevComments = [newComment, ...currentTask.comments];
    updateTask({ ...currentTask, comments: prevComments });
    reset();
  };

  // - Delete comment handler
  const deleteCommentHandler = (id) => {
    const prevComments = currentTask.comments.filter((item) => item.id !== id);
    updateTask({ ...currentTask, comments: prevComments });
  };

  return (
    <div className="task" data-aos="fade-in">
      {/* Task bar */}
      <div className="task__nav">
        <div>
          <Link to={"/"} className={setDark("link")}>
            <img src="./img/icons/back.svg" alt="" />
            <span className="hidden">Return</span>
          </Link>
        </div>

        <div className="task__action-buttons">
          <button
            className={`btn-secondary ${setDark("btn-secondary--edit")}`}
            onClick={editHandler}
          >
            <img src="./img/icons/edit.svg" alt="" />
            <span>Edit</span>
          </button>

          <button
            className="btn-secondary btn-secondary--delete"
            onClick={deleteHandler}
          >
            <img src="./img/icons/delete.svg" alt="" />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Task header */}
      <div className="task__header">
        <div className={`task__checkbox cb-${cbStyle}`}>
          <input
            type="checkbox"
            name=""
            id=""
            checked={isCompleted}
            onChange={handleCompleted}
          />
        </div>
        <h2 className={setDark("task__title")}>{currentTask.title}</h2>
      </div>

      {/* Task chips */}
      <div className="task__chips">
        <div
          className={setDark("task__chip")}
          style={{
            backgroundColor: colorGradient,
            border: `1px solid ${color}`,
          }}
        >
          <img
            src={useIcon(currentTask.category)}
            alt=""
            style={{ filter: colorFilter }}
          />
          <span className="label">{currentTask.category}</span>
        </div>

        <div
          className={setDark("task__chip")}
          style={{
            backgroundColor: colorGradient,
            border: `1px solid ${color}`,
          }}
        >
          <span className="label">Creation date:</span>
          <span className="date">{currentTask.creationDate}</span>
        </div>

        <div
          className={setDark("task__chip")}
          style={{
            backgroundColor: colorGradient,
            border: `1px solid ${color}`,
          }}
        >
          <span className="label">Task date is for:</span>
          <span className="date">{currentTask.creationDate}</span>
        </div>

        <div
          className={setDark("task__chip")}
          style={{
            backgroundColor: colorGradient,
            border: `1px solid ${color}`,
          }}
        >
          <img
            src={
              isCompleted
                ? "./img/icons/checked.svg"
                : "./img/icons/unchecked.svg"
            }
            alt=""
            style={{ filter: colorFilter }}
          />
          <span className="label">
            {isCompleted ? "Completed" : "Unfinished"}
          </span>
        </div>
      </div>

      {/* Task description */}
      <div className={setDark("task__description")}>
        <span>Description</span>
        <p>{currentTask.description}</p>
      </div>

      {/* Comment Form */}
      <div className="task__comments">
        <span>Add new comment?</span>

        <form className="task__form-comment" onSubmit={handleSubmit(onSubmit)}>
          <div className={setDark("input")}>
            <label htmlFor="comment"></label>
            <input
              type="text"
              name="comment"
              {...register("text", { required: true })}
            />
          </div>
          <button className="btn-primary" style={{ backgroundColor: color }}>
            Add
          </button>
        </form>
      </div>

      {/* Comment list */}
      {currentTask.comments && (
        <CommentSection
          comments={currentTask.comments}
          onDeleteComment={deleteCommentHandler}
          color={color}
          colorGradient={colorGradient}
        />
      )}

      {/* Empty comment list image */}
      {currentTask.comments && currentTask.comments.length === 0 && (
        <div className="no-comments">
          <img src="./img/no-comments.png" alt="" />
          <p className="no-comments__text">No comment has been added</p>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
