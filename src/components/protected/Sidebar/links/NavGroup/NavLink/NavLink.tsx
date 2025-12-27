"use client";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { alpha } from "@mui/material";
import { type ReactNode } from "react";
import useIsActive from "./hooks/useIsActive";
import useNavigate from "./hooks/useNavigate/useNavigate";

interface Props {
  label: string;
  route: string;
  icon: ReactNode;
}

function NavLink({ label, route, icon }: Props) {
  const isActive = useIsActive(route);
  const onClick = useNavigate(route);

  return (
    <ListItemButton
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
      sx={{
        bgcolor: (theme) =>
          isActive ? alpha(theme.palette.primary.main, 0.2) : "inherit",
        "&:hover": {
          bgcolor: (theme) =>
            isActive
              ? alpha(theme.palette.primary.main, 0.3)
              : alpha(theme.palette.action.hover, 0.1),
        },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}

export default NavLink;
