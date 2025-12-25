import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AvatarButton from "./AvatarButton";
import SidebarToggle from "./SidebarToggle";
import HeaderLabel from "./HeaderLabel";
import HeaderIconButtons from "./HeaderIconButtons";

/* @TODO add test immediate */
function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SidebarToggle />
          <HeaderLabel />
          <HeaderIconButtons />
          <AvatarButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
