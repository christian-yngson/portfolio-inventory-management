import { Stack } from "@mui/material";
import SettingsIconButton from "./SettingsIconButton";
import NotificationsIconButton from "./NotificationsIconButton";

/* @TODO add test immediate */
function HeaderIconButtons() {
  return (
    <Stack
      direction="row"
      sx={{
        mr: 2,
        gap: 2,
        display: { xs: "none", md: "flex" },
      }}
    >
      <NotificationsIconButton />
      <SettingsIconButton />
    </Stack>
  );
}

export default HeaderIconButtons;
