import { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }) => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isModalDetailVisible, setIsModalDetailVisible] = useState(false);

  const [currentTaskID, setCurrentTaskId] = useState(null);

  const closeModal = () => {
    setIsAddModalVisible(false);
    setIsModalDetailVisible(false);
    setCurrentTaskId(null);
  };

  const openAddModal = () => {
    setIsAddModalVisible(true);
  };

  const closeAddModal = () => {
    setIsAddModalVisible(false);
    setCurrentTaskId(null);
  };

  const openDetailModal = () => {
    setIsModalDetailVisible(!isModalDetailVisible);
  };

  const closeDetailModal = () => {
    setIsModalDetailVisible(false);
    setCurrentTaskId(null);
  };

  return (
    <ModalContext.Provider
      value={{
        isAddModalVisible,
        setIsAddModalVisible,
        currentTaskID,
        setCurrentTaskId,
        openAddModal,
        closeAddModal,
        openDetailModal,
        isModalDetailVisible,
        closeDetailModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
