import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AddTaskModal from "./components/AddTaskModal";
import Sidebar from "./components/Sidebar";
import TaskDetail from "./components/TaskDetail";
import TaskDetailModal from "./components/TaskDetailModal";
import { ModalContext } from "./context/modal/ModalContext";
import { ThemeContext } from "./context/theme/ThemeContext";
import Home from "./pages/Home";

const App = () => {
  const { isAddModalVisible, isModalDetailVisible } = useContext(ModalContext);
  const { setDark } = useContext(ThemeContext);

  return (
    <div className="app">
      {isAddModalVisible && <AddTaskModal />}
      {isModalDetailVisible && <TaskDetailModal />}

      <div className="app__sidebar">
        <Sidebar />
      </div>

      <div className={setDark("app__home-page")}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:taskId" element={<TaskDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
