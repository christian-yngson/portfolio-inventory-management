import { useContext } from "react";
import { SidebarContext } from "@/components/protected/SidebarProvider";

/* @TODO add test immediate */
const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within the SidebarProvider");
  }
  return context;
};

export default useSidebar;
