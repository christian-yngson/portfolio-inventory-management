import { IconButton } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

/* @TODO add test immediate */
function NotificationsIconButton() {
  return (
    <IconButton color="inherit" aria-label="Notifications">
      <NotificationsNoneOutlinedIcon />
    </IconButton>
  );
}

export default NotificationsIconButton;
