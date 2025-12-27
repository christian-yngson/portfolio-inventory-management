"use client";

import Drawer from "@mui/material/Drawer";
import Ui from "@/lib/constants/ui";
import { ReactNode } from "react";
import { useSidebar } from "../../SidebarProvider/hooks";

interface Props {
  children: ReactNode;
}

function SidebarDrawer({ children }: Props) {
  const { expanded } = useSidebar();

  const width = Ui.sidebarWidth;
  return (
    <Drawer
      id="sidebar-drawer"
      sx={{
        width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width,
          boxSizing: "border-box",
          transition: "width 0.3s",
        },
      }}
      variant="persistent"
      anchor="left"
      open={expanded}
      aria-label="sidebar navigation"
      role="navigation"
      aria-hidden={!expanded}
    >
      {children}
    </Drawer>
  );
}

export default SidebarDrawer;
