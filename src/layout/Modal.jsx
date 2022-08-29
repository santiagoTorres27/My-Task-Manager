import React, { useContext, useEffect } from "react";
import { ModalContext } from "../context/modal/ModalContext";
import { ThemeContext } from "../context/theme/ThemeContext";

const Modal = ({ children }) => {
  const { closeModal } = useContext(ModalContext);
  const { setDark } = useContext(ThemeContext);

  const onCloseModal = (event) => {
    if (event.target.classList.value === "modal") {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={onCloseModal}>
      <div className={setDark("modal__container")}>{children}</div>
    </div>
  );
};

export default Modal;
