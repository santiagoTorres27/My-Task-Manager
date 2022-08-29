import { useEffect, useState } from "react";
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider = ({ children }) => {
  const isExpanded =
    JSON.parse(localStorage.getItem("expandedSidebar")) || false;

  const [expanded, setExpanded] = useState(isExpanded);

  useEffect(() => {
    localStorage.setItem("expandedSidebar", JSON.stringify(expanded) || false);
  }, [expanded]);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
};
