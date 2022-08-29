import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../context/modal/ModalContext";
import { TasksContext } from "../context/tasks/TasksContext";
import { ThemeContext } from "../context/theme/ThemeContext";
import { categorySelected } from "../helpers/validators";
import Modal from "../layout/Modal";

const AddTaskModal = () => {
  const { closeAddModal, currentTaskID } = useContext(ModalContext);
  const { addTask, updateTask, getTaskById } = useContext(TasksContext);
  const { setDark } = useContext(ThemeContext);

  // - Configure React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // - Use effect: check wether it is editing or adding
  useEffect(() => {
    if (currentTaskID) {
      const data = getTaskById(currentTaskID);
      reset(data);
    }
  }, []);

  // - Submit form
  const submitHandler = (data) => {
    if (currentTaskID) {
      updateTask(data);
    } else {
      const task = {
        id: new Date().getTime().toString(),
        creationDate: new Date().toISOString().split("T")[0],
        completed: false,
        comments: [],
        ...data,
      };
      addTask(task);
    }

    closeAddModal();
  };

  return (
    <Modal>
      <form className="form" onSubmit={handleSubmit(submitHandler)}>
        <div className={setDark("form__title")}>
          {currentTaskID && <h2>Editing your task...</h2>}
          {!currentTaskID && <h2>Adding new Task</h2>}
        </div>

        {/* Title */}
        <div className={setDark("form__input")}>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            name="title"
            {...register("title", { required: true })}
          />
          {errors.title?.type === "required" && (
            <small className="form__error-msg">You have to enter a title</small>
          )}
        </div>

        {/* Description */}
        <div className={setDark("form__input")}>
          <label htmlFor="description"></label>
          <input
            type="text"
            id="description"
            placeholder="Description"
            name="description"
            {...register("description", { required: true })}
          />
          {errors.description?.type === "required" && (
            <small className="form__error-msg">A description is needed</small>
          )}
        </div>

        {/* Category */}
        <div className={setDark("form__input")}>
          <label htmlFor="category"></label>
          <select
            id="category"
            name="category"
            defaultValue={"DEFAULT"}
            {...register("category", {
              validate: categorySelected,
            })}
          >
            <option value="DEFAULT" disabled>
              Select your category
            </option>
            <option value="School">School</option>
            <option value="Home">Home</option>
            <option value="Health">Health</option>
            <option value="Shopping">Shopping</option>
          </select>

          {errors.category && (
            <small className="form__error-msg">
              You have to select a category
            </small>
          )}
        </div>

        {/* Date */}
        <div className={setDark("form__input")}>
          <label htmlFor="date"></label>
          <input
            type="date"
            id="date"
            name="date"
            {...register("date", { required: true })}
          />
          {errors.date?.type === "required" && (
            <small className="form__error-msg">
              You have to select a date for your task
            </small>
          )}
        </div>

        <div className="form__buttons">
          <button
            type="button"
            className="btn-primary btn-primary--outlined"
            onClick={closeAddModal}
          >
            Cancel
          </button>

          <button type="submit" className="btn-primary">
            {currentTaskID ? "Edit" : "Add new task"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
