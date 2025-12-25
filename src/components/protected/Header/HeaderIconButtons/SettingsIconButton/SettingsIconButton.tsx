import { IconButton } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

/* @TODO add test immediate */
function SettingsIconButton() {
  return (
    <IconButton color="inherit" aria-label="Settings">
      <SettingsOutlinedIcon />
    </IconButton>
  );
}

export default SettingsIconButton;
