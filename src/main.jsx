import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./context/modal/ModalProvider";
import { SidebarProvider } from "./context/sidebar/SidebarProvider";
import { TasksProvider } from "./context/tasks/TasksProvider";
import { ThemeProvider } from "./context/theme/ThemeProvider";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <TasksProvider>
          <SidebarProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </SidebarProvider>
        </TasksProvider>
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>
);
