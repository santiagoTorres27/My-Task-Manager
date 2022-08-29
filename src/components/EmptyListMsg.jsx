import React, { useContext, useEffect } from "react";
import { ModalContext } from "../context/modal/ModalContext";
import { ThemeContext } from "../context/theme/ThemeContext";

import AOS from "aos";
import "aos/dist/aos.css";

const EmptyListMsg = () => {
  const { openAddModal } = useContext(ModalContext);
  const { setDark } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="msg" data-aos="fade-in">
      <p className={setDark("msg__title")}>
        It seems that there is no tasks to show
      </p>
      <button className="btn-primary" onClick={openAddModal}>
        Add a new task
      </button>
      <img src="./img/empty_tasks.png" alt="Empty tasks" />
    </div>
  );
};

export default EmptyListMsg;
