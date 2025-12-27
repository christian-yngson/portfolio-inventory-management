"use client";

import { createContext, useCallback, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

/* @TODO add test immediate */
function SidebarProvider({ children }: Props) {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  return (
    <SidebarContext.Provider value={{ expanded, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const SidebarContext = createContext({
  expanded: true,
  toggleSidebar: () => {},
});

export default SidebarProvider;
