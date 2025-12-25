import { Avatar, IconButton } from "@mui/material";

/* @TODO integrate API */
/* @TODO add test immediate */
function AvatarButton() {
  return (
    <IconButton sx={{ p: 0 }}>
      <Avatar alt="User avatar">G</Avatar>
    </IconButton>
  );
}

export default AvatarButton;
