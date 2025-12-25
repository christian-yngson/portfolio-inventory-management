import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

/* @TODO add test immediate */
/* @TODO accessibility for aria-label. must be dynamic */
function SidebarToggle() {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="Toggle sidebar"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
  );
}

export default SidebarToggle;
