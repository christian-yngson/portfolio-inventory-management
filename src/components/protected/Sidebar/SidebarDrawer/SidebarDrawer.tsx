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
  const isPhone = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
        position: {
          xs: "absolute",
          sm: "relative",
        },
      }}
      variant={isPhone ? "temporary" : "persistent"}
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
