"use client";

import Drawer from "@mui/material/Drawer";
import Ui from "@/lib/constants/ui";
import { ReactNode } from "react";
import { useSidebar } from "../../SidebarProvider/hooks";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  children: ReactNode;
}

function SidebarDrawer({ children }: Props) {
  const { expanded, toggleSidebar } = useSidebar();
  const isMediumOrGreater = useMediaQuery((theme) =>
    theme.breakpoints.up("md")
  );

  const width = Ui.sidebarWidth;
  return (
    <Drawer
      id="sidebar-drawer"
      onClose={toggleSidebar}
      sx={{
        width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width,
          boxSizing: "border-box",
          transition: "width 0.3s",
        },
      }}
      variant={isMediumOrGreater ? "persistent" : "temporary"}
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
