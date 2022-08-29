import { useEffect, useReducer, useState } from "react";
import { TasksContext } from "./TasksContext";
import { tasksReducer } from "./tasksReducer";

export const TasksProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasksList, dispatch] = useReducer(tasksReducer, initialState);

  const [list, setList] = useState(tasksList);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksList) || []);

    setList(tasksList);
  }, [tasksList]);

  // - Crud items

  const addTask = (task) => {
    dispatch({
      type: "ADD",
      payload: task,
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: "UPDATE",
      payload: task,
    });
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: "DELETE",
      payload: taskId,
    });
  };

  const getTaskById = (taskId) => {
    return tasksList.find((task) => task.id === taskId);
  };

  // - Sorting items
  const sortByNewest = () => {
    setList(
      [].concat(list).sort((a, b) => {
        return a.date < b.date ? 1 : -1;
      })
    );
  };

  const sortByOldest = () => {
    setList(
      [].concat(list).sort((a, b) => {
        return a.date > b.date ? 1 : -1;
      })
    );
  };

  const sortAlphabeticallyAsc = () => {
    setList(
      [].concat(list).sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else {
          return -1;
        }
      })
    );
  };

  const sortAlphabeticallyDesc = () => {
    setList(
      [].concat(list).sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        } else {
          return -1;
        }
      })
    );
  };

  // - Filtering items

  const filterList = (category) => {
    switch (category) {
      case "":
        setList(tasksList);
        break;

      case "School":
        setList(tasksList.filter((task) => task.category === "School"));
        break;

      case "Home":
        setList(tasksList.filter((task) => task.category === "Home"));
        break;

      case "Health":
        setList(tasksList.filter((task) => task.category === "Health"));
        break;

      case "Shopping":
        setList(tasksList.filter((task) => task.category === "Shopping"));
        break;

      case "Completed":
        setList(tasksList.filter((task) => task.completed === true));
        break;

      case "Unfinished":
        setList(tasksList.filter((task) => task.completed === false));
        break;

      default:
        break;
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasksList,
        addTask,
        updateTask,
        deleteTask,
        getTaskById,
        sortByNewest,
        sortByOldest,
        sortAlphabeticallyAsc,
        sortAlphabeticallyDesc,
        list,
        filterList,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
