"use client";

import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useSidebar } from "../../SidebarProvider/hooks";
import { useRef } from "react";
import { AccessibleLiveRegion } from "@/components/common";

function SidebarToggle() {
  const { expanded, toggleSidebar } = useSidebar();
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        ref={buttonRef}
        size="large"
        edge="start"
        color="inherit"
        aria-controls="sidebar-drawer"
        aria-expanded={expanded}
        aria-label={expanded ? "collapse sidebar" : "expand sidebar"}
        sx={{ mr: 2 }}
        onClick={toggleSidebar}
      >
        {expanded ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>
      <AccessibleLiveRegion
        message={expanded ? "Sidebar expanded" : "Sidebar collapsed"}
      />
    </>
  );
}

export default SidebarToggle;
